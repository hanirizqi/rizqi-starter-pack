// Author: @hantu

export default {
  router: {
    base: '/example',
  },
  // target: 'static',
  server: {
    port: 5000 // default: 3000
  },

  axios: {
    baseURL: 'http://example.tobokoding.com/example-api/api',
    proxy: true,
  },

  proxy: {
    '/example-api/api': {
      target: 'http://example.tobokoding.com/example-api/api',
      pathRewrite: { '^/example-api/api': '' },
      changeOrigin: true,
    },
  },

  publicRuntimeConfig: {
    apiUrl: 'http://example.tobokoding.com/example-api/api',
    hanqiSecretKey: 'T0b0'
  },


  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/example-api/api/auth/login', method: 'post'},
          user:  false,
          logout: { url: '/example-api/api/auth/logout', method: 'post'},
          tokenRequired: true,
          tokenType: 'Bearer'
        },
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      callback: false,
      home: '/',
      user: '/profile',
    },
  },

  head: {
    title: 'example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'static/icon.png' },
      { rel: 'shortcut icon', href: 'static/icon.png' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css' },
    ],
  },
  render: {
    static: {
      maxAge: 60 * 60 * 24 * 365 * 1000,
    },
  },
  pwa: {
    icon: {
      fileName: 'icon.png',
    },
    manifest: {
      name: 'example',
    },
  },

  css: ['~/assets/css/font.css', '~/assets/scss/app.scss'],

  plugins: [
    '@/plugins/axios',
    '@/plugins/helpers.js',
    '@/plugins/vue-form',
    '@/plugins/vue-lazyload',
    '@/plugins/vue-numeric',
    '@/plugins/vue-gallery-slideshow',
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss','@nuxtjs/date-fns'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    'vue-sweetalert2/nuxt',
    'cookie-universal-nuxt',
  ],
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700],
    },
    display: 'swap',
  },

  content: {},

  build: {
    webpack: ['wowjs'],
    extend(config, ctx) {
      config.resolve.alias.vue$ = require.resolve('vue/dist/vue.esm.js')
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },
  
  generate: {
    cache: {
      ignore: ['guides'], // changes in the guides folder will not cause a re-build
    },
  },
  
    loading: false,

  sweetalert: {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674'
  }
}
