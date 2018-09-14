importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4392661caa7ba17838e5.js",
    "revision": "857ed62472be2ba90f27b8d9d9d80186"
  },
  {
    "url": "/_nuxt/491dcbd8d7e3cdf81641.js",
    "revision": "14b716a330fcd38f2e4f41a82a536cef"
  },
  {
    "url": "/_nuxt/6863695cba64cbb8cc0f.js",
    "revision": "ae6cb7019b4a5128719cd0a00767ebde"
  },
  {
    "url": "/_nuxt/75b10a5daef3a7c7365c.js",
    "revision": "2bd870756afbe2c6dc013be3c22ab7d4"
  },
  {
    "url": "/_nuxt/766433756c9be9ec4d87.js",
    "revision": "4d9a1464c0b0a2eb034f8c859f7cdda4"
  },
  {
    "url": "/_nuxt/7828ca7e47bcaede1414.js",
    "revision": "d8f6001ca4e455005d3a4779476884f8"
  },
  {
    "url": "/_nuxt/99dfc8c4d77e9a74087b.js",
    "revision": "a15714928f9cfca63079653ad962e866"
  },
  {
    "url": "/_nuxt/a736681909408de7b0b8.js",
    "revision": "2d3be9143df3b84fad5aecba9f6315aa"
  },
  {
    "url": "/_nuxt/babedf1d7403a3ca42ca.js",
    "revision": "deb53a96ee77f93869b3339b02bdd0f8"
  },
  {
    "url": "/_nuxt/de653bf1806245dd17d2.js",
    "revision": "9ab004bc05c5d5f7263b170d857c2941"
  }
], {
  "cacheId": "nuxt-example",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





