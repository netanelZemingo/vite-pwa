import React, { useEffect } from "react";

const CustomNotifications = () => {
  const showNotification = () => {
    if ("serviceWorker" in navigator)
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          navigator.serviceWorker.ready.then(function (registration) {
            registration.showNotification("Notification with ServiceWorker");
          });
        }
      });
  };

  return (
    <div>
      <p>CustomNotifications</p>
      {"serviceWorker" in navigator ? (
        <button onClick={showNotification}>showNotification</button>
      ) : (
        <p>your browser wont support it</p>
      )}
    </div>
  );
};

export default CustomNotifications;
