const CACHE_NAME = "maeevick-cache";

const cachedFiles = [
    "/",
    "/index.html",
    "/error.html",
    "/static/styles.css",
    "/static/manifest.json",
    "/static/robots.txt",
    "/static/favicon.ico",
    "/static/maeevick-banner.webp",
    "/static/microsaas-maker.webp",
    "/static/icons/icon-192x192.png",
    "/static/icons/icon-384x384.png",
    "/static/icons/icon-512x512.png",
    "/static/icons/icon-mask-512x512.png",
    "/static/icons/icon-1024x1024.png",
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(cachedFiles);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        }).catch(function (error) {
            return caches.match(new Request('/error.html'));
        })
    );
});