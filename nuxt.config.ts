// Private or public tokens that need to be specified after build using environment variables.
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },
  devtools: { enabled: true },  
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@nuxt/ui'
  ],
  ui: {
    icons: ['ph', 'simple-icons']
  },
  colorMode: {
    preference: 'dark'
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700]
    }
  },
  fontMetrics: {
    fonts: ['DM Sans']
  }
})