// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        'Exo 2': [100, 200, 300, 400, 500, 600, 700],
      }
    }],
  ]
})
