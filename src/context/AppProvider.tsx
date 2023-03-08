'use client'
import useInitialState from '../hooks/useInitialState';
import React from 'react'
import { AppContext } from './AppContex'

interface AppProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const AppProvider = ({ children }: AppProviderProps) => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            {children}
        </AppContext.Provider>
    )
}