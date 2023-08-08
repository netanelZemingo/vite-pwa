import React from "react";
import { User } from "../types/DataSets";
import { styled } from "styled-components";

const Username = styled.span`
  font-size: small;
  text-align: center;
`;
const UserPhoto = styled.img`
  border-radius: 50%;
  background: whitesmoke;
  max-width: 50px;
`;

const _UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

interface UserDetailsProps {
  user: User;
  isMyMsg: boolean;
}
export const UserDetails = ({ user, isMyMsg }: UserDetailsProps) => {
  return (
    <_UserDetails>
      <UserPhoto src={user.icon} />
      <Username>{isMyMsg ? "Me" : user.username}</Username>
    </_UserDetails>
  );
};
