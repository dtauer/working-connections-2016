// Register the service worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/service-worker.js', {scope:'/'})
    .then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registered swith scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
    	console.log('ServiceWorker registration failed: ', err);
    });
}
