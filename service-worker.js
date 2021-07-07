if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"e9a670d48fcb85465ec302e9212bd32f","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"e9a670d48fcb85465ec302e9212bd32f","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"5aeedd6f5f132a52a68307876777c19e","url":"static/css/24.f5f9d973.chunk.css"},{"revision":"f1ad6fca9d52e5a562de1a09568f704e","url":"static/css/29.e473b777.chunk.css"},{"revision":"09172f3b256cb6724b297f2609093737","url":"static/js/0.d99fd7cc.chunk.js"},{"revision":"269452aa6a49cfe2cc15ad3b182a751f","url":"static/js/1.119146d5.chunk.js"},{"revision":"1c1445baa6cca7903fec23a88128eb5b","url":"static/js/11.e85e6f45.chunk.js"},{"revision":"495701b1c0e10cd2fa066b19350d8988","url":"static/js/12.61066d35.chunk.js"},{"revision":"f326e77ef02a4f0d3eee1881f622c6e9","url":"static/js/13.f34159b6.chunk.js"},{"revision":"6bcfa2837a0c2c06a513b56c09742665","url":"static/js/14.e6ac15f3.chunk.js"},{"revision":"1b79c40c0c7d7955b14ede7d1603300b","url":"static/js/15.84ae7c83.chunk.js"},{"revision":"49480eb36a1e9fa1997d6c5b46a387f1","url":"static/js/16.24d0cfb8.chunk.js"},{"revision":"9c9def7869b6a2ac6fbc95d890cafe11","url":"static/js/17.0ac917a2.chunk.js"},{"revision":"39428e2ccc05cdb230eefd870fa44602","url":"static/js/18.4086b671.chunk.js"},{"revision":"45ca2c53307117754f61475f52240fa5","url":"static/js/19.6b9737dd.chunk.js"},{"revision":"f7d59711a2bac9ef78443dc63e4da59c","url":"static/js/2.264e5764.chunk.js"},{"revision":"f20c27f42b5dd5e41b9b50b7d7a7278f","url":"static/js/20.d1bec440.chunk.js"},{"revision":"1d7a3e1e2db6d0d5ad1a19dccf54b08b","url":"static/js/21.67ed0c14.chunk.js"},{"revision":"c13028d8a17e4b5d0f83c317d5ae6489","url":"static/js/22.cb633e2b.chunk.js"},{"revision":"06adc8e7cc418e923972c5de032c2aae","url":"static/js/23.e8cdd3cd.chunk.js"},{"revision":"e8f40396af553a0e76313f0e19e5fa87","url":"static/js/24.e39f6aaf.chunk.js"},{"revision":"8e8b8801eb3c59fe32cb7b3376663261","url":"static/js/25.956ec733.chunk.js"},{"revision":"8ee8ecd48bd353ff7480c70357cd9910","url":"static/js/26.c9e0d208.chunk.js"},{"revision":"a806c20ed7a82a7a0114f2849b4fe6f3","url":"static/js/27.f8cfd5bd.chunk.js"},{"revision":"0307ffc891930b31025df7a5a25bf959","url":"static/js/28.46bf6ecc.chunk.js"},{"revision":"06f3bada79dec4b7ccd8dbfcfba88ff0","url":"static/js/29.20f86a3a.chunk.js"},{"revision":"0cef24b17e54916772d4686f60c4ea3b","url":"static/js/3.ad6b5717.chunk.js"},{"revision":"c5eb6282bf2fee0d19cb3356211c6caa","url":"static/js/30.d1321a73.chunk.js"},{"revision":"00f2826c5fdfdc21b15f4756840b14f3","url":"static/js/31.22a77c15.chunk.js"},{"revision":"7cf9a14e7b52a5af4d8f1910f8611590","url":"static/js/32.7680dc25.chunk.js"},{"revision":"0ec19585d0ed37159c39059cea28daa7","url":"static/js/33.3dad22a6.chunk.js"},{"revision":"0db0314599b77d519b655f8e971ff1d0","url":"static/js/34.80297e7e.chunk.js"},{"revision":"1f165519ee814aea331b9809acb4947d","url":"static/js/35.26c9c85a.chunk.js"},{"revision":"7b65872f983ac1fd099e23043f699c17","url":"static/js/36.849bb7e1.chunk.js"},{"revision":"2066c842d4b36d1942f0d2adfb16d3e8","url":"static/js/37.0807e49d.chunk.js"},{"revision":"f4f083d7d1101f69c00b7929ee9594aa","url":"static/js/38.1c46d408.chunk.js"},{"revision":"f0f373c868f2005902a9f194f4af0248","url":"static/js/39.14374879.chunk.js"},{"revision":"e969c34be0f8e78739d4a6733e7bfd27","url":"static/js/4.8124c309.chunk.js"},{"revision":"7c6985c6aefc012fdbe8e1cc791f7222","url":"static/js/40.da79d828.chunk.js"},{"revision":"4862f8d4b83cc39a951c3ccd73e903ea","url":"static/js/41.11763557.chunk.js"},{"revision":"9fd3b4b2bf8a7fbb97a969763df3a402","url":"static/js/42.b37a20fd.chunk.js"},{"revision":"aaf05ea53bb94b246af2333e8d95072a","url":"static/js/43.11476c13.chunk.js"},{"revision":"a9898b060f1f70d6a235488e8938dd5b","url":"static/js/44.922564f2.chunk.js"},{"revision":"a827666a6f0ea9db30e4a175000226be","url":"static/js/45.ddb53cbd.chunk.js"},{"revision":"1d28173080e57e54447f83df7fe60576","url":"static/js/46.c5005f0d.chunk.js"},{"revision":"51085da0c05d8f04248d5861052dbee2","url":"static/js/5.f40d97af.chunk.js"},{"revision":"e5a538a58ac2a91714440f6833353705","url":"static/js/6.09447bcc.chunk.js"},{"revision":"3f1debc564a59ca45887aa0f1db2954c","url":"static/js/7.0c8232cf.chunk.js"},{"revision":"231032aa180c969add6d1233dbe5c6e7","url":"static/js/8.5de9ab63.chunk.js"},{"revision":"619a93bd9da667d16040f4d7dad494d0","url":"static/js/main.1b5c0e24.chunk.js"},{"revision":"3748c97677acb8974675f82f191a4447","url":"static/js/runtime-main.f72553bf.js"}]);

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
