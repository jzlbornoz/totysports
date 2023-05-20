'use client'
import { MouseEventHandler, useState } from 'react';
import { InitialStateModel } from '@/models/InitialState.model';
import { JerseyModel } from '@/models/jersey.model';
import useLocalStorage from './useLocalStorage';

const initialState: InitialStateModel = {
    menuIsOpen: false,
    cart: [],
    favorites: []
};

const useInitialState = () => {
    const [appState, setAppState] = useLocalStorage("Sesion_V1", initialState);
    // const [repeatedProduct , setRepeatedProduct] = useState({});

    const toggleMenu = () => {
        setAppState({
            ...appState,
            menuIsOpen: !appState.menuIsOpen,
        });
    };

    const findIndex = (payload: JerseyModel): number => {
        const res = appState.cart.findIndex((item) => item.id = payload.id);
        return res;
    }

    const addToCart = (payload: JerseyModel) => {
        const payloadIndex = findIndex(payload);
        if (payloadIndex !== -1) {

            const newId = Math.floor(Math.random() * 1000000);
            const modifiedPayload = { ...payload, id: newId };
            setAppState({
                ...appState,
                cart: [...appState.cart, modifiedPayload],
            })
        } else {
            setAppState({
                ...appState,
                cart: [...appState.cart, payload],
            })
        }
    };

    const removeFromCart = (payload: JerseyModel) => {
        setAppState({
            ...appState,
            cart: appState.cart.filter((items) => items.id !== payload.id || items.size !== payload.size)
        });
    };
    const addToFavorite = (payload: JerseyModel) => {
        setAppState({
            ...appState,
            favorites: [...appState.favorites, payload]
        })
    }



    return {
        appState,
        toggleMenu,
        addToCart,
        removeFromCart,
        findIndex,
        addToFavorite,
    };
};

export default useInitialState;