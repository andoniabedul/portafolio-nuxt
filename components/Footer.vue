<template>
  <footer class="footer">
    <div class="footer-brand">
      <h2 class="footer-brand-title">Andoni Abedul</h2>
      <h3 class="footer-brand-subtitle">
        Hecho con
        <svg
          class="footer-brand-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        desde Madrid
      </h3>
      <ul class="footer-brand-social"></ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style lang="postcss">
.footer {
  position: relative;
  @apply lg:h-40 h-36 flex w-full rounded-t-sm items-center flex-row text-white;
  border-top: 2px solid var(--secondary-color);
  background-color: black;
  &-brand {
    color: white;
    @apply w-full flex flex-col flex-1 justify-center items-start p-8;
    &-title {
      @apply flex text-lg font-bold;
    }
    &-subtitle {
      @apply flex text-base;
    }
    &-icon {
      @apply w-5 h-5 ml-1 mr-1;
    }
    &-rights {
      @apply text-sm italic;
    }
  }
}
</style>
