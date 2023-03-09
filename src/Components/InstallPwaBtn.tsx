import React, { useEffect, useMemo, useState } from "react";
import { BeforeInstallPromptEvent } from "../types/BeforeInstallPromptEvent";

const InstallPwaBtn = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const deferedFunction = (e: BeforeInstallPromptEvent) => {
    // e.preventDefault();
    setDeferredPrompt(e);
  };
  addEventListener("beforeinstallprompt", deferedFunction);

  const onInstall = () => {
    if (!deferredPrompt) return;
    console.log(deferredPrompt);
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      setDeferredPrompt(null);
    });
  };

  useEffect(() => {
    return () => {
      removeEventListener("beforeinstallprompt", deferedFunction);
    };
  }, []);

  return <> {deferredPrompt ? <button onClick={onInstall}>install app</button> : null}</>;
};

export default InstallPwaBtn;
