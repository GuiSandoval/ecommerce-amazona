import Cookies from "js-cookie";
import React, { createContext, useReducer } from "react";

interface IState {
  darkMode: boolean;
}
interface IPropsStore {
  children: React.ReactNode;
}

export const Store = createContext<any>(null);
const initialState: IState = {
  darkMode: Cookies.get("darkMode") === "ON",
};

function reducer(state: IState, action: any) {
  switch (action.type) {
    case "DARK_MODE_ON":
      return { ...state, darkMode: true };
    case "DARK_MODE_OFF":
      return { ...state, darkMode: false };
    default:
      return state;
  }
}

export const StoreProvider = ({ children }: IPropsStore) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};
