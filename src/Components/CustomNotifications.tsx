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

  return (
    <div>
      CustomNotifications
      <button onClick={showNotifications}>showNotifications</button>
    </div>
  );
};

export default CustomNotifications;
