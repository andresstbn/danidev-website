// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],

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
      redirectOn: 'root',
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
      ],
      htmlAttrs: {
        'data-theme': 'dark'
      },
      script: [
        {
          innerHTML: `(function(){try{var q=new URLSearchParams(location.search).get('theme');var t=q||localStorage.getItem('site.theme')||'dark';if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;}}catch(e){}})();`,
          tagPosition: 'head'
        }
      ]
    }
  }
})
