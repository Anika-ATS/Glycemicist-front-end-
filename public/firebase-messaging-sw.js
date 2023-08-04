importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyD__gqrEmtuqRRV9NJRZwMCXR7Ak27CtwM",
  authDomain: "simple-firebase-4a442.firebaseapp.com",
  projectId: "simple-firebase-4a442",
  storageBucket: "simple-firebase-4a442.appspot.com",
  messagingSenderId: "357525628809",
  appId: "1:357525628809:web:1dc4ac4f8748925bbde358",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
