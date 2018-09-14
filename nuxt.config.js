const bodyParser = require('body-parser')
const session = require('express-session')
const nib = require('nib')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['~/assets/main.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/pwa', { icon: false }]
  ],
  manifest: {
    name: 'PWA NAME',
    lang: 'en'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        }, {
          test: /\.styl$/,
          loader: 'stylus-loader',
          exclude: /(node_modules)/,
          options: {
            use: [nib()]
          }
        })
      }
    }
  },
  render: {
    bundleRenderer: {
      cache: require('lru-cache')({
        max: 1000,
        maxAge: 1000 * 60 * 15
      })
    }
  },
  router: {
    middleware: [ 'user-agent', 'i18n' ]
  },
  plugins: [ '~/plugins/i18n.js' ],
  generate: {
    routes: [ '/', '/about', '/ko/about', '/fr/about' ]
  },
  /*
  ** Add server middleware
  ** Nuxt.js uses `connect` module as server
  ** So most of express middleware works with nuxt.js server middleware
  */
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // session middleware
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }
    }),
    // Api middleware
    // We add /api/login & /api/logout routes
    '~/api'
  ]
}

