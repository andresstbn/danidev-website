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
      script: [
        {
          // Reads: ?theme= URL param → cookie → 'dark'.
          // Runs before any CSS is evaluated so there is no flash.
          // localStorage migration is handled in useTheme's onMounted.
          innerHTML: `(function(){try{var q=new URLSearchParams(location.search).get('theme');var c=document.cookie.match(/(?:^|;\\s*)site\\.theme=([^;]+)/);var t=q||(c&&c[1])||'dark';if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;}}catch(e){}})();`,
          tagPosition: 'head'
        }
      ]
    }
  }
})
