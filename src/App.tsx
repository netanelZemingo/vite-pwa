import { styled } from "styled-components";
import MyRouter from "./Components/MyRouter";
import NavBar from "./Components/NavBar";
import ReloadPrompt from "./Components/ReloadPrompt";

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const App = () => {
  return (
    <AppContainer>
      <ReloadPrompt />
      <MyRouter />
    </AppContainer>
  );
};

export default App;
