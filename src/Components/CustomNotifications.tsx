import React, { useEffect } from "react";

const CustomNotifications = () => {
  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("wtf");
      }
    });
  }, []);
  const interval = setInterval(() => {
    new Notification("Titlei", {
      body: "Notification body text",
    });
  }, 2000);

  return (
    <div>
      CustomNotifications
      <button onClick={() => clearInterval(interval)}>clearInterval</button>
    </div>
  );
};

export default CustomNotifications;
