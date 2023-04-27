console.warn("swDev.js");

let cacheData = "appV1";

this.addEventListener("install", (event) => {

    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "/static/js/vendors~main.chunk.js",
                "/index.html",
                "/",
                "/flicker",
                "/script",
                "/contact",
            ])
        })
    )
})


this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {
                if (result) {
                    return result;
                }
                let requestUrl = event.request.clone();
                return fetch(requestUrl);
                // what is the difference between return fetch(event.request) and return fetch(requestUrl);
                // Ans : https://stackoverflow.com/questions/48463483/what-is-the-difference-between-fetch-event-request-and-fetch-requesturl
            })
        )
    }
    
})
