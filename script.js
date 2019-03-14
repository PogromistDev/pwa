let deferredPrompt = null;

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

	window.addEventListener('beforeinstallprompt', e => {
		e.preventDefault();

		deferredPrompt = e;

		deferredPrompt.prompt();
		deferredPrompt.userChoice
		.then(result => {
			if (result.outcome === "accepted") {
				alert("PWA added to home screen");
			} else {
				alert("PWA isn't added to home screen 😪");
			}

			deferredPrompt = null;
		});
	});
}