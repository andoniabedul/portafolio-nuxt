# Migration Plan: Nuxt 2/Vue 2 → Nuxt 3/Vue 3

## Overview

This portfolio site uses Nuxt 2.15 with Vue 2 Options API. Migration to Nuxt 3 requires updating configuration, plugins, and converting all components to **Composition API with `<script setup lang="ts">`** (TypeScript).

**Note:** Contentful CMS integration will be removed from the project.

---

## Phase 1: Project Setup & Dependencies

### 1.1 Update package.json

Replace dependencies with Nuxt 3 compatible versions:

```json
{
  "devDependencies": {
    "nuxt": "^3.14.0",
    "typescript": "^5.3.0",
    "@types/aos": "^3.0.7"
  },
  "dependencies": {
    "@nuxtjs/tailwindcss": "^6.12.0",
    "@nuxtjs/color-mode": "^3.4.0",
    "@nuxtjs/device": "^3.2.0",
    "aos": "^2.3.4",
    "crypto-js": "^4.2.0",
    "@types/crypto-js": "^4.2.0"
  }
}
```

**Removals:**
- `contentful` → Removing CMS integration
- `@nuxtjs/axios` → Use built-in `$fetch`
- `vue-timers` → Replace with native `setInterval` (not Vue 3 compatible)
- `vue-cryptojs` → Use `crypto-js` directly
- All eslint/babel/postcss packages → Nuxt 3 handles these

### 1.2 Create .env file (if needed for future)

```env
NUXT_PUBLIC_GOOGLE_ANALYTICS_ID=<value>
```

---

## Phase 2: Configuration

### 2.1 Convert nuxt.config.js → nuxt.config.ts

**File:** `nuxt.config.ts`

```typescript
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: 'Andoni Abedul',
      htmlAttrs: { lang: 'es' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@200;300&display=swap' }
      ]
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/device'
  ],

  colorMode: {
    classSuffix: ''
  },

  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  }
})
```

---

## Phase 3: Plugins Migration

### 3.1 plugins/aos.client.ts (rewrite)

```typescript
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    offset: 120,
    delay: 0,
    duration: 600,
    easing: 'ease-out',
    once: true
  })
})
```

### 3.2 Delete old plugins

- `plugins/client.js` (empty)
- `plugins/vue-timers.js` (replace with native setInterval)
- `plugins/vue-cryptojs.js` (import crypto-js directly where needed)
- `plugins/contentful.js` (removing Contentful)

---

## Phase 4: Pages & Components

### 4.1 pages/blog.vue - Remove or convert to static

Since Contentful is being removed, either:
- **Option A:** Delete `pages/blog.vue` and related components
- **Option B:** Convert to static content or placeholder

### 4.2 components/Nav.vue - Fix deprecated patterns

- Replace `process.browser` → `import.meta.client`
- Replace `destroyed()` → `onUnmounted()`
- Replace `created()` → `onMounted()`

```vue
<script setup lang="ts">
const name = ref('Andoni Abedul')
const showMenu = ref(false)
const { isMobile } = useDevice()

const handleScroll = (): void => {
  // scroll handling logic
}

const handleMenu = (): void => {
  showMenu.value = !showMenu.value
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
```

### 4.3 pages/index.vue - Remove vue-timers mixin

Replace mixin with native interval:

```vue
<script setup lang="ts">
interface GreetingState {
  actual: string
  index: number
  letterIndex: number
  list: string[]
}

const greeting = ref<GreetingState>({
  actual: '',
  index: 0,
  letterIndex: 0,
  list: ['Hola', 'Hello', 'Ola', 'Bonjour', 'Ciao', 'Hallo', 'Tere', 'Привет', '你好', 'こんにちは']
})

const { isMobile } = useDevice()
const delay = computed(() => isMobile ? 100 : 300)

let interval: ReturnType<typeof setInterval>

const setGreeting = (): void => {
  let word = greeting.value.list[greeting.value.index]
  if (!word) {
    greeting.value.index = 0
    greeting.value.letterIndex = 0
    word = greeting.value.list[0]
  }
  const letters = word.split('')
  if (greeting.value.letterIndex === word.length) {
    greeting.value.index++
    greeting.value.actual = ''
    greeting.value.letterIndex = 0
  } else {
    greeting.value.actual += letters[greeting.value.letterIndex]
    greeting.value.letterIndex++
  }
}

onMounted(() => {
  interval = setInterval(setGreeting, 500)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>
```

### 4.4 layouts/default.vue - Update color mode access

Replace `this.$colorMode` with `useColorMode()` composable:

```vue
<script setup lang="ts">
const colorMode = useColorMode()
const { isMobile } = useDevice()

const themeMode = computed<'dark' | 'light'>(() =>
  colorMode.preference === 'light' ? 'dark' : 'light'
)

const changeMode = (): void => {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}
</script>
```

### 4.5 pages/contact.vue - Convert to Composition API

Replace `vue-cryptojs` with direct crypto-js import:

```vue
<script setup lang="ts">
import CryptoJS from 'crypto-js'

const from = ref('')
const subject = ref('')
const message = ref('')
const sended = ref(false)
const encrypted = ref('')

const encryptMessage = (): void => {
  encrypted.value = CryptoJS.AES.encrypt(message.value, 'key').toString()
}
</script>
```

---

## Phase 5: Cleanup

### 5.1 Files to delete

- `.contentful.json`
- `plugins/client.js`
- `plugins/vue-timers.js`
- `plugins/vue-cryptojs.js`
- `plugins/contentful.js`
- `nuxt.config.js` (replaced by .ts)
- `.nuxt/` directory
- `dist/` directory (will regenerate)
- `pages/blog.vue` (if removing blog)
- `components/Blog/` directory (if removing blog)

### 5.2 Files to update

- `.gitignore` - Add `.env` if not present

---

## Files Summary

| File | Action |
|------|--------|
| `package.json` | Update dependencies, add TypeScript |
| `nuxt.config.js` → `nuxt.config.ts` | Rewrite |
| `plugins/aos.client.ts` | Rewrite with defineNuxtPlugin |
| `pages/index.vue` | Convert to `<script setup lang="ts">`, remove mixin |
| `pages/contact.vue` | Convert to `<script setup lang="ts">`, import crypto-js |
| `pages/about.vue` | Add `<script setup lang="ts">` |
| `pages/blog.vue` | Delete or convert to static |
| `components/Nav.vue` | Convert to `<script setup lang="ts">`, fix lifecycle |
| `layouts/default.vue` | Convert to `<script setup lang="ts">`, useColorMode |
| `components/Blog/*` | Delete (if removing blog) |
| `components/Footer.vue` | Add `<script setup lang="ts">` |
| `components/Logo.vue` | Add `<script setup lang="ts">` |
| `tailwind.config.js` → `tailwind.config.ts` | Update syntax |

---

## Verification

1. Run `npm install` to install new dependencies
2. Run `npm run dev` and verify:
   - Homepage loads with animated greeting
   - Dark/light mode toggle works
   - Contact page form works
   - AOS scroll animations trigger
   - Navigation responsive behavior works
3. Run `npm run generate` to verify static generation
4. Test on mobile viewport for device detection
