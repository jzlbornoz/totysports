"use client";
import { createContext } from "react";

export type AppContextProps = {
  appState: {
    menuIsOpen: boolean;
  };
  toggleMenu: () => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);