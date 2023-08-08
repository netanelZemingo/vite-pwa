import { createContext, useContext } from "react";
import { User } from "../types/DataSets";
export type GlobalContent = {
  user: User | null;
  setUser: (c: User) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  user: null, // set a default value
  setUser: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
