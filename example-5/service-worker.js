var CACHE_VERSION = 1;
var CACHE_NAME = `example-5_${CACHE_VERSION}`;

function sendMessage(message) {
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage(message);
    });
  });
}

self.addEventListener('message', event => {
  caches.open(CACHE_NAME)
    .then(cache => {
      var request = new Request(event.data.url, {mode: 'no-cors'});
      cache.add(request).then(() => {
        sendMessage({message: 'Added to cache', url: event.data.url});
      });
    });
});
