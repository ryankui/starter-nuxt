// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules: [
    '@unocss/nuxt',
  ],

  css: [
    '@unocss/reset/tailwind.css',
    '~/global.css',
  ],

  compatibilityDate: '2024-08-23',
})
