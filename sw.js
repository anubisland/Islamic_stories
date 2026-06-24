// Service worker for صغار الصحابة — Little Companions
// IMPORTANT: the main HTML document uses a NETWORK-FIRST strategy — always
// try to fetch the latest version from the internet first, and only fall
// back to the cached copy if the network is unavailable. This guarantees
// that every update pushed to the site is picked up immediately on the next
// load with internet access, while still preserving full offline support.
const CACHE_NAME = "sighar-sahaba-v5";
const ASSETS = [
  "./",
  "./index.html",
  "./story1.html",
  "./story2.html",
  "./story3.html",
  "./story4.html",
  "./story5.html",
  "./story6.html",
  "./story7.html",
  "./story8.html",
  "./story9.html",
  "./manifest.json",
  "./scenes-svg.js",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const isDocument = event.request.mode === "navigate" || event.request.destination === "document";

  if (isDocument) {
    // Network-first: always try to get the freshest page when online.
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() =>
          caches.match(event.request).then((cached) => cached || caches.match("./index.html"))
        )
    );
    return;
  }

  // Other static assets (manifest, icons): cache-first is fine, they rarely change.
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (event.request.method === "GET" && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      });
    })
  );
});
