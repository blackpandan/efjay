export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ef-jay',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [

      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'google-site-verification', name:"google-site-verification", content:"1Ang9Craw3p3uuvnu1DoiWAZsAkSt6LFJbwcNiMOj4o" },
      { hid: 'description', name: 'description', content: 'The best place to find weird dad jokes, top-headlines news and jobs, created with Vue/Nuxt :)' },
      { hid: 'author', name:'author', content: 'James Faith'},
      { property: 'og:title', content: 'Ef-jay a site to read dad jokes, news and find jobs', vmid: 'og:title'},
      { property: 'og:type', content: 'website', vmid: 'og:type'},
      { property: 'og:url', content: 'http://www.efjay.tk', vmid: 'og:url'},
      { property: 'og:description', content: 'The best place to find weird dad jokes, top-headlines news and jobs, created with Vue/Nuxt :)', vmid: 'og:description'},
      { property: 'og:image', content: './static/head.webp', vmid: 'og:image'},
      { property: 'twitter:title', content: 'Ef-jay a site to read dad jokes, news and find jobs', vmid: 'og:title'},
      { property: 'twitter:type', content: 'website', vmid: 'og:type'},
      { property: 'twitter:url', content: 'http://www.efjay.tk', vmid: 'og:url'},
      { property: 'twitter:description', content: 'The best place to find weird dad jokes, top-headlines news and jobs, created with Vue/Nuxt :)', vmid: 'og:description'},
      { property: 'twitter:image', content: './static/head.webp', vmid: 'og:image'},
      { property: 'twitter:card', content: 'summary', vmid: 'twitter:card'},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vant/lib/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vant'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
