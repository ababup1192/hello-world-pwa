importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyBcYsxT9Fcppqgll7bsPOQjEWHw8R3LmgM",
    authDomain: "pwa-hello-4f0ad.firebaseapp.com",
    databaseURL: "https://pwa-hello-4f0ad.firebaseio.com",
    projectId: "pwa-hello-4f0ad",
    storageBucket: "pwa-hello-4f0ad.appspot.com",
    messagingSenderId: "603222636622"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	const title = 'Hello World';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});