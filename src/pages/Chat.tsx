import { styled } from "styled-components";
import { Button, Expalining, Input, SpecialText } from "./Styles";
import { useContext, useEffect, useRef, useState } from "react";
import { SubscribeModal } from "../Components/SubscribeModal";
import { useGlobalContext } from "../context/UserContext";
import { ServerService } from "../services/Server";
import { Messages } from "../types/DataSets";
import { _Message } from "../Components/Message_";

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
  gap: 1rem;
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
const ExpaliningContainer = styled.div`
  position: absolute;
  right: 1rem;
  padding: 1rem;
  width: 25rem;
  text-align: center;
  border: 1px solid black;
  border-radius: 20px;
  color: white;
  background: linear-gradient(90deg, #040142 0%, rgba(9, 9, 121, 1) 35%, #01aacc 100%);
  font-size: large;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const Chat = () => {
  const { user } = useGlobalContext();
  const [messageToSend, setMessageToSend] = useState("");
  const [messages, setMessages] = useState<Messages>({});
  const messageContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const { data } = await ServerService.getAllMessages();
      setMessages(data.messages);
      if (messageContainer.current) {
        messageContainer.current.scrollTop = messageContainer.current.scrollHeight;
      }
    })();
  }, []);

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
          <ExpaliningContainer>
            <p>
              The Images & the texts here are being Cached each in a diffrent techinque, the images
              is
              <SpecialText> "CacheFirst"</SpecialText> & the chats is by
              <SpecialText>"StaleWhileRevalidate"</SpecialText>
            </p>
          </ExpaliningContainer>
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
