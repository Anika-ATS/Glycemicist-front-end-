// firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// Initialize Firebase
firebase.initializeApp({
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(async payload => {
  const {notification, data} = payload;

  // Check if the notification has a 'medicine' property
  if (data && data.medicine) {
    const {medicine, times} = data;

    // Loop through the 'times' array and schedule notifications for each time
    for (const time of times) {
      const [hours, minutes] = time.split(":");

      // Schedule notification at the specified time for each medicine
      self.registration.showNotification(
        `Time to take ${medicine.medicine_name}`,
        {
          body: `It's time to take your medicine ${medicine.medicine_name}`,
          icon: "/path/to/notification-icon.png",
          timestamp: Date.now() + calculateTimeDifference(hours, minutes), // Calculate time difference to schedule notification
          data: {medicine: medicine.medicine_name}, // Optional data to pass to the notification
        }
      );
    }
  }

  // By returning nothing here, we prevent the default notification behavior
  return null;
});

function calculateTimeDifference(hours, minutes) {
  const currentTime = new Date();
  const scheduledTime = new Date();
  scheduledTime.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);

  const timeDifference = scheduledTime - currentTime;
  return Math.max(timeDifference, 0);
}

// ... Add other custom service worker logic here ...
