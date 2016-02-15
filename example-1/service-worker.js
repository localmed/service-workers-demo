console.log(this);
console.log(self);
console.log(typeof window);

self.addEventListener('install', event => {
  console.log('installed!', event);
});

self.addEventListener('activate', event => {
  console.log('activated!', event);
});

self.addEventListener('fetch', event => {
  console.log('fetched!', event.request.url, event);
});
