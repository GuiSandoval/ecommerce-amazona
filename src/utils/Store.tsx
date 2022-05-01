import Cookies from "js-cookie";
import React, { createContext, useReducer } from "react";

// ACTIONS TYPES
const DARK_MODE_ON = "DARK_MODE_ON";
const DARK_MODE_OFF = "DARK_MODE_OFF";

interface IState {
  darkMode: boolean;
}
interface IStoreContext {
  state: IState;
  dispatch: React.Dispatch<any>;
}
interface IPropsStore {
  children: React.ReactNode;
}

export const Store = createContext<IStoreContext>({} as IStoreContext);
const initialState: IState = {
  darkMode: Cookies.get("darkMode") === "ON",
};

function reducer(state: IState, action: any) {
  switch (action.type) {
    case DARK_MODE_ON:
      return { ...state, darkMode: true };
    case DARK_MODE_OFF:
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
