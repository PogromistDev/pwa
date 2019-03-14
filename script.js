if ('serviceWorker' in navigator) {
	window.addEventListener('load', e => {
		navigator.serviceWorker.register('/pwa/sw.js')
		.then(registration => {
			console.log('ServiceWorker registered successfully');
		})
		.catch(err => {
			console.dir(err);
		});
	});
}