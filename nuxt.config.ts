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
    classSuffix: '-mode',
    preference: 'dark',
    fallback: 'dark'
  },

  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },

  compatibilityDate: '2024-11-01'
})
