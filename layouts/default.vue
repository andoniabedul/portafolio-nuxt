<template>
  <div id='main-content theme-night'>
    <Nav />
    <main>
      <slot />
    </main>
    <Footer />
    <button class="change-theme shadow-box" @click="changeMode">
        <svg v-if="themeMode === 'dark'" class="change-theme--icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
        </svg>
        <svg v-else class="change-theme--icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
        <span v-if="!isMobile" class="change-theme--message">
          I prefer {{ themeMode }}
        </span>
    </button>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const { isMobile } = useDevice()

const themeMode = computed<'dark' | 'light'>(() =>
  colorMode.value === 'light' ? 'dark' : 'light'
)

const changeMode = (): void => {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<style lang="postcss">
/*
  GENERAL STYLES
*/
html {
  font-family:
    'Raleway',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

main {
  min-height: 80vh;
}
html.dark-mode {
  --principal-color: black;
  --secondary-color: white;
}
html.light-mode {
  --principal-color: white;
  --secondary-color: black;
}
html.dark-mode body {
  @apply bg-black text-white;
}
html.light-mode body {
  @apply bg-white text-black;
}

.change-theme {
  @apply rounded-xl lg:px-4 lg:py-2 px-2 py-1 fixed flex align-middle justify-center;
  bottom: 2.5%;
  right: 2.5%;
  border: 2px solid var(--principal-color);
  background-color: var(--secondary-color);
  color: var(--principal-color);
  font-size: 14px;
  &--icon {
    color: var(--primary-color);
    @apply w-4 h-4 m-1;
  }
  &--message {
    font-size: 15px;
    align-self: center;
  }
}
.traslucid-box {
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  opacity: 1;
  &-white {
    background-color: rgba(255, 255, 255, 0.65);
    color: black;
  }
  &-black {
    background-color: rgba(0, 0, 0, 1);
    color: white;
  }
}
.shadow-box {
  @apply shadow-lg;
  &-big {
    @apply shadow-xl;
  }
}
.border-box {
  border: 2px solid var(--secondary-color);
}
/*
  TRANSITIONS
*/
.slide-top-enter-active,
.slide-top-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}
.slide-top-enter,
.slide-top-leave-to {
  opacity: 0;
  transform: translate3d(0, -15px, 0);
}
.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
</style>
