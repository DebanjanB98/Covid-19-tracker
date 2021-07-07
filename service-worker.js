if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"660f3b2ecec5b4725dda6775ff9fb29e","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"660f3b2ecec5b4725dda6775ff9fb29e","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"ecb87a7919d3be1fe6ba848df966f269","url":"static/css/25.f5f9d973.chunk.css"},{"revision":"72df718e1fe560a1c09c33cad6bc6c62","url":"static/css/30.604f0148.chunk.css"},{"revision":"09172f3b256cb6724b297f2609093737","url":"static/js/0.d99fd7cc.chunk.js"},{"revision":"32a6fcc36162cf4b1231c824f3af726f","url":"static/js/1.83e3a33b.chunk.js"},{"revision":"1c1445baa6cca7903fec23a88128eb5b","url":"static/js/11.e85e6f45.chunk.js"},{"revision":"5b3370f145d54280bba8242fa1ecce31","url":"static/js/12.5060e2e2.chunk.js"},{"revision":"de0c7a027473c176e651ac5adfc92094","url":"static/js/13.2b47ce26.chunk.js"},{"revision":"f96a6e762fe25e733005c0af65235c26","url":"static/js/14.ec80d9f8.chunk.js"},{"revision":"fef7859414cafbe1af0722ac4fc96eee","url":"static/js/15.651af9cd.chunk.js"},{"revision":"fea9edb9e8df45adced51c45782dbbb9","url":"static/js/16.531b2b5c.chunk.js"},{"revision":"a7cf98ee6311794cf121fad691cbaa69","url":"static/js/17.00cb51e5.chunk.js"},{"revision":"9a580e3340b2f3266bc6c4745a353808","url":"static/js/18.7576f21a.chunk.js"},{"revision":"e4cc05b6706b7af76f3e48fe17a8c9d0","url":"static/js/19.b30aaf2b.chunk.js"},{"revision":"08af1ce9c99f23aadded09a9e208dd0d","url":"static/js/2.6987e7d8.chunk.js"},{"revision":"e2e2034257dabb14ec189b5e1d4f542f","url":"static/js/20.1283a043.chunk.js"},{"revision":"3eba4b8f858c348ae78a7930e5b756cb","url":"static/js/21.b600baae.chunk.js"},{"revision":"c31649c547671bb5ac9223bc5806ef69","url":"static/js/22.b1c9c609.chunk.js"},{"revision":"a7619f1f1b5dde59e7bf2e03c50eecad","url":"static/js/23.3be9f57a.chunk.js"},{"revision":"a7f890dd060840387230ec0250aece70","url":"static/js/24.98c47d2c.chunk.js"},{"revision":"f2d2ff8bd55ea8f0bc1fee032e98d5e1","url":"static/js/25.8602a238.chunk.js"},{"revision":"a48c3be7a48e8a4c8819fefd3d7b3fe4","url":"static/js/26.b77231bf.chunk.js"},{"revision":"c28536008889a331b8307d84f9d789d1","url":"static/js/27.22038206.chunk.js"},{"revision":"8ad651e8603762625d6834cd2d94941f","url":"static/js/28.2c4140f7.chunk.js"},{"revision":"ab9078d9d69bbb8be77db60f71e57b08","url":"static/js/29.9ea81186.chunk.js"},{"revision":"41cb0d1550d32284f166b8139fe4b8f6","url":"static/js/3.49f96a8e.chunk.js"},{"revision":"2a60dc8d19d8dcccce9dc2f88618bc29","url":"static/js/30.34aaf0dd.chunk.js"},{"revision":"55d68c403b4e20bfe0cfedf127c42a42","url":"static/js/31.2839bf2b.chunk.js"},{"revision":"5330d218a7edf0bf1551a348938f16c5","url":"static/js/32.9f2e3497.chunk.js"},{"revision":"5fec6c739bc7e65a4244a0fe327caed8","url":"static/js/33.826006a4.chunk.js"},{"revision":"94ed11917ca77c773ec7b991fa793a3f","url":"static/js/34.edafba4e.chunk.js"},{"revision":"599ef183671dd5e58c405060d63ce31f","url":"static/js/35.914ba3ba.chunk.js"},{"revision":"70e5963f86b65d7b85128cb51ad86e3b","url":"static/js/36.8a177550.chunk.js"},{"revision":"901d7ab21c902a2269dbcf5cb80c4369","url":"static/js/37.f87f4d54.chunk.js"},{"revision":"003c979c08deaf9ff960a2f6679acad9","url":"static/js/38.ab44ea42.chunk.js"},{"revision":"431abedf9b8b8009b71e9bfbea348584","url":"static/js/39.62d0557f.chunk.js"},{"revision":"b58c45be8d87fc39d5ab874f648cfae8","url":"static/js/4.8bbfbdf1.chunk.js"},{"revision":"863ba558fd649bb68c8bcc190c67a3a5","url":"static/js/40.937a8266.chunk.js"},{"revision":"0520ad4085497644c3c94b5e2287ac61","url":"static/js/41.f5c2070a.chunk.js"},{"revision":"415f28d5bcf4eb34952ee6f2110c2c3e","url":"static/js/42.178159da.chunk.js"},{"revision":"65aff4d10be5d33d31ae8c74f72b503a","url":"static/js/43.a692ee41.chunk.js"},{"revision":"1cffae86a93c532982448c1b5773e405","url":"static/js/44.eb68786a.chunk.js"},{"revision":"8b496c8602fa7bb06688a83a34e4f0d5","url":"static/js/45.5f9f008d.chunk.js"},{"revision":"18b22f50174b9b2cd440d30850f94dc8","url":"static/js/46.5f742747.chunk.js"},{"revision":"d25ec1569b884b93c405709ea3b0a1e8","url":"static/js/47.458f7ae5.chunk.js"},{"revision":"fc32e7525b4cc76f25655046dede7c72","url":"static/js/5.56abb9c6.chunk.js"},{"revision":"75986fbcf9544d54a401b26e57e13a9c","url":"static/js/6.1dec41d8.chunk.js"},{"revision":"6d93574a62a658ab670dfd5c83a213e6","url":"static/js/7.4fc834f8.chunk.js"},{"revision":"c067aafde6890ff38e4676bb279ad0a3","url":"static/js/8.27a2823e.chunk.js"},{"revision":"35d913b7d45591f1abf35fca9dfb16c7","url":"static/js/main.5e4ae949.chunk.js"},{"revision":"48f675067a6b0fca06416cce0103f53f","url":"static/js/runtime-main.c9dd221d.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
