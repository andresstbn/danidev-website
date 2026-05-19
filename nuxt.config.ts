// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    dataValue: 'theme',
    classSuffix: ''
  },

  devtools: {
    enabled: true
  },

  css: [
    '~/assets/css/tokens.css',
    '~/assets/css/base.css'
  ],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  googleFonts: {
    families: {
      'Geist': [300, 400, 500, 600, 700],
      'Geist Mono': [400, 500]
    },
    display: 'swap',
    preload: true,
    prefetch: true
  },

  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: 'English', language: 'en' },
      { code: 'es', file: 'es.json', name: 'Español', language: 'es' }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_lang',
      fallbackLocale: 'en'
    }
  },

  app: {
    head: {
      title: 'Daniel A. Esteban — Tech Lead, Payment Infrastructure',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Tech Lead specializing in payment infrastructure, distributed systems, and event-driven architectures.' }
      ]
    }
  }
})
