import React, { useEffect } from "react";

const CustomNotifications = () => {
  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("wtf");
        new Notification("Titlei", {
          body: "Notification body text",
        });
      }
    });
  }, []);

  return <div>CustomNotifications</div>;
};

export default CustomNotifications;
