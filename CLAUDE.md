# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev       # Development server with hot reload at localhost:3000
npm run build     # Build for production
npm run generate  # Generate static site
npm run preview   # Preview production build
```

## Architecture

This is a Nuxt 3 static portfolio website with the following key characteristics:

- **Framework**: Nuxt 3 with Vue 3 Composition API (`<script setup lang="ts">`)
- **Target**: Static site generation (`ssr: false`)
- **Styling**: Tailwind CSS v3 with PostCSS
- **Theme**: Light/dark mode toggle using `@nuxtjs/color-mode` with CSS variables (`--principal-color`, `--secondary-color`)

### Plugins (client-side only)

- `aos` - Scroll animations (`plugins/aos.client.ts`)

### Layout Structure

The default layout (`layouts/default.vue`) provides:
- Navigation and footer components (auto-imported)
- Theme toggle button (bottom-right corner)
- CSS variables for theming: `.dark-mode` and `.light-mode` classes
- Uses `useColorMode()` and `useDevice()` composables

### Pages

- `index.vue` - Homepage with animated greeting
- `about.vue` - About page
- `contact.vue` - Contact form
