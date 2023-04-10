// This is the "Offline page" service worker

importScripts('/assets/js/workbox-sw.js');

const CACHE = "pwabuilder-page";
const offlineFallbackPage = "/ToDo-replace-this-name.html";

self.addEventListener("message", function(event) {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE)
      .then(function(cache) { return cache.add(offlineFallbackPage); })
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener('fetch', function(event) {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match(event.request)
        .then(function(cachedResp) {
          const networkFetch = fetch(event.request)
            .then(function(networkResp) {
              const cacheCopy = networkResp.clone();
              caches.open(CACHE)
                .then(function(cache) { cache.put(event.request, cacheCopy); });
              return networkResp;
            });

          return cachedResp || networkFetch;
        })
        .catch(function(error) { return caches.match(offlineFallbackPage); })
    );
  }
});

