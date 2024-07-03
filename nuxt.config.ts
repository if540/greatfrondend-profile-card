// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-03",

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/greatfrondend-profile-card/' : '/',
    buildAssetsDir: '/static/'
  },

  modules: ["@nuxtjs/tailwindcss"]
})