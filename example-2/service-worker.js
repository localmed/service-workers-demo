self.addEventListener('fetch', event => {
  var response = new Response('This came from the service worker!');
  event.respondWith(response);

  // Default behavior - same as not using `respondWith`
  // event.responseWith(fetch(event.request));
});
