import { Button } from "../pages/Styles";
import "./ReloadPrompt.css";
import { useRegisterSW } from "virtual:pwa-register/react";

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line prefer-template
      console.log("SW Registered: " + r);
      console.log(r);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
    immediate: true,
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div className="ReloadPrompt-container">
      {(offlineReady || needRefresh) && (
        <div className="ReloadPrompt-toast">
          <div className="ReloadPrompt-message">
            {offlineReady ? (
              <span>App ready to work offline</span>
            ) : (
              <span>New content available, click on reload button to update.</span>
            )}
          </div>
          {needRefresh && (
            <Button className="ReloadPrompt-toast-button" onClick={() => updateServiceWorker(true)}>
              Reload
            </Button>
          )}
          <Button className="ReloadPrompt-toast-button" onClick={() => close()}>
            Close
          </Button>
        </div>
      )}
    </div>
  );
}

export default ReloadPrompt;
