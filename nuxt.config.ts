// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/src/asset/css/main.scss',
  ],
  devtools: { enabled: false },
  modules: [
    '@element-plus/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        'Exo 2': [100, 200, 300, 400, 500, 600, 700],
        'Inter': [100, 200, 300, 400, 500, 600, 700],
      }
    }],
  ],
  elementPlus: { /** Options */ }
})
