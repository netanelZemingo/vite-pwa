import { styled } from "styled-components";
import MyRouter from "./Components/MyRouter";
import NavBar from "./Components/NavBar";
import ReloadPrompt from "./Components/ReloadPrompt";
import { MyGlobalContext } from "./context/UserContext";
import { User } from "./types/DataSets";
import { useCallback, useState } from "react";
import { ServerService } from "./services/Server";

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const App = () => {
  const initUser = () => {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      const user = JSON.parse(userFromStorage);
      ServerService.user = user;
      return user;
    }
    return null;
  };
  const [user, _setUser] = useState<User | null>(initUser());
  const setUser = useCallback((user: User | null) => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      _setUser(user);
      ServerService.user = user;
    }
  }, []);

  return (
    <MyGlobalContext.Provider value={{ user, setUser }}>
      <AppContainer>
        <ReloadPrompt />
        <MyRouter />
      </AppContainer>
    </MyGlobalContext.Provider>
  );
};

export default App;
