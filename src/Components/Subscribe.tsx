import { useCallback, useState } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";
import { useGlobalContext } from "../context/UserContext";
import { Button } from "../pages/Styles";
import { ServerService } from "../services/Server";
import { isInPwa, isIos } from "../utils/isIos";
import { urlBase64ToUint8Array } from "../utils/urlBase64ToUint8Array";

export const Subscribe = () => {
  const { user } = useGlobalContext();
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);
  useRegisterSW({
    onRegisteredSW(r, reg) {
      console.log(r, reg);

      if (!reg) {
        console.error("CUSTOM ERROR _ no registered SW");
        return;
      }
      setRegistration(reg);
      reg.pushManager?.getSubscription().then((sub) => {
        if (sub && !(sub.expirationTime && Date.now() > sub.expirationTime - 5 * 60 * 1000)) {
          console.log(sub, "asdafdsadfs");

          setIsSubscribed(true);
          console.log(sub);
        }
      });
    },
  });
  const _subscribe = async () => {
    if (!user) return;
    const subsription = await registration?.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(import.meta.env.VITE_VAPID_PUBLIC),
    });
    await ServerService.subscribeUser({ _id: user._id, user: { subsription } });
  };
  const toShowSubsribeButton: () => boolean = useCallback(() => {
    if (!user) return false;
    if (!!registration && isIos() && isInPwa()) return true;
    if (isIos() && !isInPwa()) return false;
    return true;
  }, [user, isSubscribed]);

  return <>{toShowSubsribeButton() && <Button onClick={_subscribe}>Subcribe</Button>}</>;
};
