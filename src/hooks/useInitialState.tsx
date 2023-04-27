'use client'
import { useState } from 'react';
import { InitialStateModel } from '@/models/InitialState.model';
import { JerseyModel } from '@/models/jersey.model';

const initialState: InitialStateModel = {
    menuIsOpen: false,
    cart: [],
};

const useInitialState = () => {
    const [appState, setAppState] = useState(initialState);

    const toggleMenu = () => {
        setAppState({
            ...appState,
            menuIsOpen: !appState.menuIsOpen,
        });
    };

    const addToCart = (payload: JerseyModel) => {
        setAppState({
            ...appState,
            cart: [...appState.cart, payload ],
        })
        //appState.cart.push(payload);
        console.log(appState.cart);
    };

    const removeFromCart = (payload: JerseyModel) => {
        setAppState({
            ...appState,
            cart: appState.cart.filter((items) => (items.id && items.size) !== (payload.id && payload.size)),
        });
    };

    return {
        appState,
        toggleMenu,
        addToCart,
        removeFromCart
    };
};

export default useInitialState;