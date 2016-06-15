'use strict';

var cacheVersion = "v3";

var filesToCache = [
          '/',
          'index.html',
          'page1.html',
          'offline.html',
          'scripts/main.js',
          '/styles/main.css',
          '/styles/icon.css',
          '/styles/material.indigo-pink.min.css',
          '/styles/fonts.woff2',
          'images/hamburger.svg'
];

//Install the Service Worker
this.addEventListener('install', function(e){
  console.log('SW: Installed');
  e.waitUntil(
    caches.open(cacheVersion)
    .then(function(cache){
      console.log('SW: Caching files');
      return cache.addAll(filesToCache);
    })
  );
})


//Activate the Service Worker
self.addEventListener('activate', function(e){
  console.log('SW: Activate');
  e.waitUntil(
    caches.keys().then(function(keyList){
      return Promise.all(keyList.map(function(key){
        if(key !== cacheVersion){
          console.log('SW: Deleting: ' + key);
          return caches.delete(key);
        }
      }));
    })
  );
});

//Intercept Network Requests
self.addEventListener('fetch', function(e){
  console.log('SW Fetch ' + e.request.url)
  if (e.request.url.indexOf("page2.html") !== -1) {
    e.respondWith(
      fetch(e.request.url).catch(function (error) {
          // Return the offline page
          return caches.match('offline.html');
      })
    )
  }else{
    e.respondWith(
      caches.match(e.request)
      .then(function(response){
        return response || fetch(e.request);
      })
    )
  }
})
