const CACHE = 'baccarat-v1';
self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(['./'])));
});
self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});
