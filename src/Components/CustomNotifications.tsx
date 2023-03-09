import React, { useEffect } from "react";

const CustomNotifications = () => {
  const showNotifications = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("wtf");
        new Notification("Titlei", {
          body: "Notification body text",
          silent: false,
        });
      }
    });
  };
  const showNotificationsAndroid = () => {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.showNotification("Notification with ServiceWorker");
    });
  };

  return (
    <div>
      CustomNotifications
      <button onClick={showNotifications}>showNotifications</button>
      <button onClick={showNotificationsAndroid}>showNotificationsAndroid</button>
    </div>
  );
};

export default CustomNotifications;
