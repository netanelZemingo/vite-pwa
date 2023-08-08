import React from "react";
import { styled } from "styled-components";
import { MessageDto } from "../types/DataSets";
import { useGlobalContext } from "../context/UserContext";
import { UserDetails } from "./UserDetails";

interface StyledMsgProps {
  $isMine: boolean;
}

const StyledMsg = styled.div<StyledMsgProps>`
  /* background: ${(props) => (props.$isMine ? "green" : "lightgray")};
  color: ${(props) => (props.$isMine ? "white" : "#BF4F74")}; */
  background: ${(props) => (props.$isMine ? "#4CAF50" : "#E0E0E0")};
  color: ${(props) => (props.$isMine ? "white" : "#BF4F74")};
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.5);

  padding: 1rem;
  border-radius: 50px;
  width: 70%;
  /* max-height: 2rem; */
  /* height: fit-content; */
  overflow-wrap: anywhere;
  display: flex;
  gap: 1rem;
  font-size: large;
  justify-content: start;
  align-items: center;
  margin: ${(props) => (props.$isMine ? "0 auto 0 0" : "0 0 0 auto")};
  max-width: 800px;
`;

interface MessageProps {
  message: MessageDto;
}
export const _Message = ({ message }: MessageProps) => {
  const { user } = useGlobalContext();
  const isMyMsg = user?._id === message.sender?._id;
  return (
    <StyledMsg $isMine={isMyMsg}>
      {message.sender.data && <UserDetails user={message.sender.data} isMyMsg={isMyMsg} />}
      {message.message}
    </StyledMsg>
  );
};
