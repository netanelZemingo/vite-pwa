import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { _Message } from "../Components/Message_";
import { SubscribeModal } from "../Components/SubscribeModal";
import { useGlobalContext } from "../context/UserContext";
import { ServerService } from "../services/Server";
import { Messages } from "../types/DataSets";
import { Button, Input } from "./Styles";

const ChatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(1, 242, 26, 0.2)),
    url(/chatBackground.jpeg);
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* gap: 1rem; */
`;
const MessagesContainer = styled.div`
  /* background-image: url(/chatBackground.jpeg); */

  height: 100%;
  /* width: 100%; */
  padding: 1rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Chat = () => {
  const { user } = useGlobalContext();
  const [messageToSend, setMessageToSend] = useState("");
  const [messages, setMessages] = useState<Messages>({});
  const messageContainer = useRef<HTMLDivElement>(null);

  let recursiveTimeout: NodeJS.Timeout;
  let isAlive = true;
  useEffect(() => {
    (async () => {
      if (!user) return;
      await getAllMessageRecursive();
      if (messageContainer.current) {
        messageContainer.current.scrollTop = messageContainer.current.scrollHeight;
      }
    })();
    return () => {
      clearTimeout(recursiveTimeout);
      isAlive = false;
    };
  }, [messageContainer.current, user]);

  const getAllMessageRecursive = async () => {
    if (!isAlive) return;
    const { data } = await ServerService.getAllMessages();
    setMessages(data.messages);
    recursiveTimeout = setTimeout(async () => {
      await getAllMessageRecursive();
    }, 3000);
  };

  const onSendMsg = async () => {
    console.log("onSendMsg");

    if (!user) throw new Error();
    const res = await ServerService.sendMessage({ message: messageToSend, sender: user?._id });
    console.log(res);
    setMessageToSend("");
  };

  return (
    <>
      {!user && <SubscribeModal />}
      <ChatContainer>
        <MessagesContainer ref={messageContainer}>
          {Object.values(messages).map((msg) => (
            <_Message message={msg} key={msg._id} />
          ))}
        </MessagesContainer>
        <InputContainer>
          <Input
            type="text"
            placeholder="Message To Sent"
            value={messageToSend}
            onChange={(e) => setMessageToSend(e.target.value)}
          />
          <Button disabled={!messageToSend} onClick={onSendMsg}>
            {">"}
          </Button>
        </InputContainer>
      </ChatContainer>
    </>
  );
};
