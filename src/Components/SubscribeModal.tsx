import React, { useEffect, useState } from "react";
import { Button, Hint, Input } from "../pages/Styles";
import { styled } from "styled-components";
import { urlBase64ToUint8Array } from "../utils/urlBase64ToUint8Array";
import { ServerService } from "../services/Server";
import { useGlobalContext } from "../context/UserContext";
import { useRegisterSW } from "virtual:pwa-register/react";
import { User } from "../types/DataSets";
// import.meta.env.VITE_VAPID_PUBLIC; // accessing the web push key
const Modal = styled.div`
  position: absolute;
  transform: translate(50%, -50%);
  background-color: rgba(255, 255, 254, 0.9);
  box-shadow: 3px 4px 51px 0px #888;;

  right: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 50%;
  border: 1px solid black;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Backdrop = styled.div`
  position: absolute;
  background-image: linear-gradient(
    135deg,
    rgba(226, 176, 255, 0.3) 10%,
    rgba(159, 68, 211, 0.3) 100%
  );

  height: 100%;
  width: 100%;
`;
export const SubscribeModal = () => {
  const { setUser, user } = useGlobalContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if (!user) {
      sendDataToSw(null);
    }
    return () => {};
  }, [registration]);

  useRegisterSW({
    onRegisteredSW(r, reg) {
      console.log(r, reg);

      if (!reg) {
        console.error("CUSTOM ERROR _ no registered SW");
        return;
      }

      setRegistration(reg);
    },
  });

  const onRegister = async () => {
    const res = await ServerService.register({ password, username });
    console.log(res?.data);

    if (res?.data.user) {
      setUser(res.data.user);
      sendDataToSw(res.data.user._id);
    }
  };
  const sendDataToSw = (userId: string | null) => {
    if (registration) {
      registration.active?.postMessage({ action: "setUserId", userId: userId });
    }
  };

  return (
    <Backdrop>
      <Modal>
        <Input
          placeholder="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          type="text"
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button onClick={onRegister}>Submit</Button>
        <Hint>If you want to get Notifications please subscribe 🫡</Hint>
      </Modal>
    </Backdrop>
  );
};
