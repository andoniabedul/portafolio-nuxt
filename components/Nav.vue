<template>
  <nav class="nav">
    <div class="flex items-center flex-no-shrink">
      <NuxtLink to="/">
        <span class="nav-brand">
          {{ name }}
        </span>
      </NuxtLink>
    </div>
    <div class="nav-drop">
      <button class="nav-burger" @click="handleMenu">
        <svg
          class="nav-burger-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <title>Menu</title>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <transition name="slide-top">
      <div v-if="showMenu" class="nav-menu">
        <div class="nav-items">
          <!--
          <NuxtLink to="/blog" class="nav-item">
            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
            </svg>
            Blog
          </NuxtLink>
          <NuxtLink to="/contact" class="nav-item">
            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg> 
            Contacto
          </NuxtLink>
          -->
          <NuxtLink to="/about" class="nav-item">
            <svg
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Acerca de mi
          </NuxtLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
const { isMobile } = useDevice()

const name = ref('Andoni Abedul')
const showMenu = ref(!isMobile)

const hasClass = (className: string, el: Element | null): boolean => {
  return el?.classList.contains(className) ?? false
}

const setClass = (className: string, el: Element | null): void => {
  el?.classList.add(className)
}

const deleteClass = (className: string, el: Element | null): void => {
  el?.classList.remove(className)
}

const handleScroll = (): void => {
  if (!import.meta.client) return
  const nav = document.querySelector('.nav')
  const boundary = 50
  if (window.scrollY > boundary && !hasClass('border-box', nav)) {
    setClass('border-box', nav)
    setClass('shadow-box', nav)
  } else if (window.scrollY < boundary) {
    deleteClass('shadow-box', nav)
    deleteClass('border-box', nav)
  }
}

const handleMenu = (): void => {
  const nav = document.querySelector('.nav')
  showMenu.value = !showMenu.value
  if (showMenu.value) setClass('border-box', nav)
  else deleteClass('border-box', nav)
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style lang="postcss">
.nav {
  @apply box-border fixed h-auto rounded-lg flex items-center justify-between flex-wrap py-2 px-6 my-2 mx-1;
  width: 98%;
  background-color: var(--principal-color);
  border: 2px solid var(--principal-color);
  transition: background-color 0.25s;
  z-index: 10;
  &-drop {
    @apply block lg:hidden;
  }
  &-items {
    @apply w-full flex flex-col lg:flex-row text-sm justify-center lg:justify-end lg:content-end lg:py-0 py-4;
    .nav-icon {
      color: var(--secondary-color);
      @apply w-5 h-7 mr-1;
    }
  }
  &-item {
    padding: 0em 0.75em;
    cursor: pointer;
    border-radius: 50px;
    border: 2px solid transparent;
    @apply backdrop-filter backdrop-brightness-125 filter brightness-100 inline-flex lg:justify-center justify-start items-center mt-4 lg:mt-0 mx-4;
    &:hover {
      border: 2px solid var(--secondary-color);
    }
  }
  &-burger {
    @apply flex items-center px-2 py-1 border rounded hover:border-white;
    color: var(--secondary-color);
    &-icon {
      color: var(--secondary-color);
      @apply w-5 h-7;
    }
  }
  &-brand {
    color: var(--secondary-color);
    @apply font-semibold text-xl;
    letter-spacing: 1px;
  }
  &-menu {
    @apply w-full block flex-grow flex lg:justify-end lg:items-center lg:w-auto lg:mx-4;
  }
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
