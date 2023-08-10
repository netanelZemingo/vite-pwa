import { styled } from "styled-components";

export const DataPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  gap: 0.5rem;
  text-align: center;
`;

export const Expalining = styled.p``;

export const DummyDataText = styled.p`
  background: lightgray;
  border: 1px solid saddlebrown;
  border-radius: 20px;
  padding: 5px;
`;
// background: ${(props) => (props.$isMine ? "#4CAF50" : "#E0E0E0")};
//   color: ${(props) => (props.$isMine ? "white" : "#BF4F74")};
export const Input = styled.input`
  border: none;
  border-bottom: 2px solid lightblue;
  min-height: 2rem;
  min-width: 15rem;
  outline: none;
  border-radius: 10px;
  padding: 0.5rem;
  max-width: 100%;
  &:focus {
    border: 2px solid lightblue;
  }
  background-color: #e0e0e0;
  color: #bf4f74;
  font-size: large;
`;

export const Hint = styled.p`
  color: gray;
  font-weight: bold;
  text-align: center;
`;

export const Button = styled.button`
  border-radius: 10px;
  border: none;
  background: #4caf50;
  box-shadow: 10px 6px 4px -1px rgba(0, 0, 0, 0.25);

  color: white;
  padding: 0.5rem;
  font-size: large;
  font-weight: bolder;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background: gray;
  }

  //
  /* Apply scale animation on hover */
  &:enabled:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }

  &:enabled {
    animation: slideAnimation 2s ease-in-out alternate;
  }

  @keyframes slideAnimation {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(5px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const SpecialText = styled.span`
  color: pink;
  text-transform: capitalize;
  text-shadow: 1px 1px 10px pink;
  font-weight: bold;
`;
