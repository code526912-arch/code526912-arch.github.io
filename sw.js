const CACHE_NAME = 'kuji-v2-cache-1';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/pwa.js',
  './manifest.webmanifest',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null)))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).catch(() => caches.match('./index.html')))
  );
});
