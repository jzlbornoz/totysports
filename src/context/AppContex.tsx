"use client";
import { JerseyModel } from "@/models/jersey.model";
import { createContext } from "react";

export type AppContextProps = {
  appState: {
    cart: JerseyModel[];
    menuIsOpen: boolean;
  };
  toggleMenu: () => void;
  addToCart: (payload : JerseyModel) => void;
  removeFromCart: (payload : JerseyModel) => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);