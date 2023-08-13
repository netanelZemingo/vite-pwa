import { styled } from "styled-components";
import MyRouter from "./Components/MyRouter";
import NavBar from "./Components/NavBar";
import ReloadPrompt from "./Components/ReloadPrompt";
import { MyGlobalContext } from "./context/UserContext";
import { User } from "./types/DataSets";
import { useCallback, useEffect, useState } from "react";
import { ServerService } from "./services/Server";

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const App = () => {
  const initUser = async () => {
    const userStringify = localStorage.getItem("user");
    if (userStringify) {
      const user = JSON.parse(userStringify);
      // const res = await ServerService.validateUser(user);
      // console.log(res);
      // if (res.data.isUser) {
      //   return user;
      // }
      if (!user) return null;
      ServerService.user = user;
      // localStorage.removeItem("user");
      return user;
    }
    return null;
  };

  useEffect(() => {
    (async () => {
      _setUser(await initUser());
    })();
  }, []);

  const [user, _setUser] = useState<User | null>(null);
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
