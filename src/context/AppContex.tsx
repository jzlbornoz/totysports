"use client";
import { JerseyModel } from "@/models/jersey.model";
import { OrderModel } from "@/models/order.model";
import { createContext } from "react";

export type AppContextProps = {
  appState: {
    cart: JerseyModel[];
    favorites: JerseyModel[];
    menuIsOpen: boolean;
    orders: OrderModel[];
  };
  toggleMenu: () => void;
  addToCart: (payload: JerseyModel) => void;
  removeFromCart: (payload: JerseyModel) => void;
  addToFavorites: (payload: JerseyModel) => void;
  removeFromFavorites: (payload: JerseyModel) => void;
  createOrder: (payload: OrderModel) => void; 
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);