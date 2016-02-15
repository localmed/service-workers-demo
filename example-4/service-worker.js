var CACHE_VERSION = 1;
var CACHE_NAME = `example-4_${CACHE_VERSION}`;
var OFFLINE_URL = 'offline.html';
var CACHE_URLS = [
  OFFLINE_URL
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CACHE_URLS);
    })
  );
});

function isHtmlRequest(request) {
  return (
    request.method === 'GET' &&
    request.headers.get('accept').includes('text/html')
  );
}

self.addEventListener('fetch', event => {
  if (isHtmlRequest(event.request)) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(OFFLINE_URL);
      })
    );
  }
});
