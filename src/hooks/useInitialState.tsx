'use client'
import { useState } from 'react';
import { InitialStateModel } from '@/models/InitialState.model';

const initialState: InitialStateModel = {
    menuIsOpen: false,
};

const useInitialState = () => {
    const [appState, setAppState] = useState(initialState);

    const toggleMenu = () => {
        setAppState({
            ...appState,
            menuIsOpen: !appState.menuIsOpen,
        });
    };

    return {
        appState,
        toggleMenu,
    };
};

export default useInitialState;