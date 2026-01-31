const CACHE_NAME = 'co-finance-cache-v1';
const urlsToCache = ['/', '/index.html', '/manifest.json', '/icon-192.png', '/icon-512.png'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))); });
self.addEventListener('fetch', event => { event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request))); });
self.addEventListener('activate', event => { const cacheWhitelist=[CACHE_NAME]; event.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>{if(!cacheWhitelist.includes(k)) return caches.delete(k);})))); });