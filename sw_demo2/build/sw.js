if ('function' === typeof importScripts) {
    importScripts(
      'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
  
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "6011b9efdae27d5beca30453e0cd73aa"
  },
  {
    "url": "logo192.png",
    "revision": "33dbdd0177549353eeeb785d02c294af"
  },
  {
    "url": "logo512.png",
    "revision": "917515db74ea8d1aee6a246cfbcc0b45"
  },
  {
    "url": "precache-manifest.ab261e8b9b18211d3dbb525c6d5a04db.js",
    "revision": "ab261e8b9b18211d3dbb525c6d5a04db"
  },
  {
    "url": "service-worker.js",
    "revision": "f7f3739127d206f3424050e9e1c1d53f"
  },
  {
    "url": "static/css/main.5f361e03.chunk.css",
    "revision": "1472653e7cd5f55fc8eabda93770382e"
  },
  {
    "url": "static/js/2.219f4baa.chunk.js",
    "revision": "3b024629cb39760e0263de48ff017df0"
  },
  {
    "url": "static/js/main.5e34b57d.chunk.js",
    "revision": "3605dfe5ddc1513a32ec4caac4838c1c"
  },
  {
    "url": "static/js/runtime-main.1509001a.js",
    "revision": "b69c9e4cd8e65d78a941243204420660"
  },
  {
    "url": "static/media/logo.5d5d9eef.svg",
    "revision": "5d5d9eefa31e5e13a6610d9fa7a283bb"
  }
]);
  
  /* custom cache rules*/
  workbox.routing.registerNavigationRoute('/index.html', {
        blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
      });
  
  workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg)$/,
        workbox.strategies.cacheFirst({
          cacheName: 'images',
          plugins: [
            new workbox.expiration.Plugin({
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
          ],
        })
      );
  
  } else {
      console.log('Workbox could not be loaded. No Offline support');
    }
  }