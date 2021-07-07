if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"387326abc5d23466416bf094635f4c07","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"387326abc5d23466416bf094635f4c07","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"5aeedd6f5f132a52a68307876777c19e","url":"static/css/24.f5f9d973.chunk.css"},{"revision":"f1ad6fca9d52e5a562de1a09568f704e","url":"static/css/29.e473b777.chunk.css"},{"revision":"1bc6be7c7814df74a444a630634c1974","url":"static/js/0.1a8282b4.chunk.js"},{"revision":"bb737db7a5cae3a84b4d68022774bb03","url":"static/js/1.79e70d36.chunk.js"},{"revision":"1c1445baa6cca7903fec23a88128eb5b","url":"static/js/11.e85e6f45.chunk.js"},{"revision":"09cb25057ccf1d6bf71a0f35f4cb7fd0","url":"static/js/12.eaa8d34f.chunk.js"},{"revision":"77e9051f36ff29e1046834222c092954","url":"static/js/13.c1f124b3.chunk.js"},{"revision":"f4fd61fbf1df7237858952d363f12cf3","url":"static/js/14.fc3904e6.chunk.js"},{"revision":"4a023c32e88248ec75f995a960e3e589","url":"static/js/15.68e8fe55.chunk.js"},{"revision":"ce3edd9bff1d06fef4e241140e1c0bdf","url":"static/js/16.20febd8f.chunk.js"},{"revision":"5bf2294f145ef87a897eff280e55d373","url":"static/js/17.d416b55e.chunk.js"},{"revision":"3887df67e70ff853f68839ed07e591df","url":"static/js/18.a827f252.chunk.js"},{"revision":"922ce6804bffe49de0c96b88ca7ed2de","url":"static/js/19.8c1063a1.chunk.js"},{"revision":"9425ab298e587a39774b3211a1feca6b","url":"static/js/2.88a71641.chunk.js"},{"revision":"cebd7fb9778de24a6a4209fbd7474fe3","url":"static/js/20.551a959a.chunk.js"},{"revision":"3b7debf51698ea7512d9397b2c558683","url":"static/js/21.0749aefd.chunk.js"},{"revision":"c13028d8a17e4b5d0f83c317d5ae6489","url":"static/js/22.cb633e2b.chunk.js"},{"revision":"0d075bf37a1910daf3abe9347f4c857d","url":"static/js/23.1abc92f6.chunk.js"},{"revision":"6d01865eea35c646e2c618af750c7ed5","url":"static/js/24.29c0677f.chunk.js"},{"revision":"193a70c99b7d13b4a2b6d104884b654c","url":"static/js/25.5675289e.chunk.js"},{"revision":"58e5ab3ced84657d9adb28535f4ebeb7","url":"static/js/26.ee4c0922.chunk.js"},{"revision":"96c8640904317bd775b13b9a3f33e8c7","url":"static/js/27.b8fb37ce.chunk.js"},{"revision":"1a1cb3ac6204ba7ac59ffedcc30fa460","url":"static/js/28.9e36f16c.chunk.js"},{"revision":"105e3bc3752050a9b2522386baf7f593","url":"static/js/29.3b6687e6.chunk.js"},{"revision":"11e5764c122c75d8d9f84cd4f8db5498","url":"static/js/3.a4557e3c.chunk.js"},{"revision":"13dd5cbe9673379889775685f7a78925","url":"static/js/30.9f5dfcb7.chunk.js"},{"revision":"c301290c657bc6ab8af52452d0ae75bc","url":"static/js/31.780605f7.chunk.js"},{"revision":"c37f0adeb3de1e4f6a17435da736dc1c","url":"static/js/32.4236475d.chunk.js"},{"revision":"e827ee2d32b25896393a634939a2d808","url":"static/js/33.2b468f53.chunk.js"},{"revision":"0db0314599b77d519b655f8e971ff1d0","url":"static/js/34.80297e7e.chunk.js"},{"revision":"447d2be943372b9353fa350c21d77797","url":"static/js/35.d09a262a.chunk.js"},{"revision":"95dab494cbb9b98d15888030571bf6e6","url":"static/js/36.7c813689.chunk.js"},{"revision":"60ed8bf82f8b99b7fe4bd2bbe8071b18","url":"static/js/37.fb0bc2d9.chunk.js"},{"revision":"1c2aea5ccc590550506881118e704538","url":"static/js/38.5d642971.chunk.js"},{"revision":"380e318eb6e7647365126724a8aaae07","url":"static/js/39.8dcd7cf0.chunk.js"},{"revision":"18917d0783e7259e76d8231aceab5983","url":"static/js/4.7b9bc41c.chunk.js"},{"revision":"63be8a3b773b311a0fe2ae8ecfb1acd8","url":"static/js/40.761d0557.chunk.js"},{"revision":"d1d40ea57c92268b89da633a21305ff2","url":"static/js/41.d35f9739.chunk.js"},{"revision":"62d3d639892b738a5fa1c81383de311d","url":"static/js/42.11c1ca57.chunk.js"},{"revision":"bcd6abfea3de144b0607653bd647f426","url":"static/js/43.f17934fe.chunk.js"},{"revision":"4c5a1e9f57386750ba9bd1ba474f5e8b","url":"static/js/44.e7e3eff6.chunk.js"},{"revision":"59b10a19626aae6f3df12d709b323a3e","url":"static/js/45.b40d2e15.chunk.js"},{"revision":"bbe9d2b006374384fa186458c9fc7bfb","url":"static/js/5.88e75d03.chunk.js"},{"revision":"fd59c8be97557ca1a4076011f7031ab5","url":"static/js/6.01ce91c5.chunk.js"},{"revision":"1d792b1192561228126075692eab8c4f","url":"static/js/7.bfdf11fd.chunk.js"},{"revision":"231032aa180c969add6d1233dbe5c6e7","url":"static/js/8.5de9ab63.chunk.js"},{"revision":"dcea31d5924aa481e3f1c26056011c7e","url":"static/js/main.a1696aba.chunk.js"},{"revision":"c13b0d6f021bbf026b6aa2c57b105eb2","url":"static/js/runtime-main.6a3ccf7b.js"}]);

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
