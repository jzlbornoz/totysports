'use client'
import { InitialStateModel } from '@/models/InitialState.model';
import { JerseyModel } from '@/models/jersey.model';
import { OrderModel } from '@/models/order.model';
import useLocalStorage from './useLocalStorage';

const initialState: InitialStateModel = {
    menuIsOpen: false,
    cart: [],
    favorites: [],
    orders: []
};

const useInitialState = () => {
    const [appState, setAppState] = useLocalStorage("Sesion_V1", initialState);

    const toggleMenu = () => {
        setAppState({
            ...appState,
            menuIsOpen: !appState.menuIsOpen,
        });
    };

    const addToCart = (payload: JerseyModel) => {
        const payloadIndex = appState.cart.findIndex((item) => item.id = payload.id);
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

    const addToFavorites = (payload: JerseyModel) => {
        //const payloadId = appState.favorites.findIndex((item) => item.id === payload.id);
        setAppState({
            ...appState,
            favorites: [...appState.favorites, payload]
        })
    }

    const removeFromFavorites = (payload: JerseyModel) => {
        setAppState({
            ...appState,
            favorites: appState.favorites.filter((items) => items.id !== payload.id)
        });
    }

    const createOrder = (payload: OrderModel) => {
        setAppState({
            ...appState,
            orders: [...appState.orders, payload]
        })
    }

    return {
        appState,
        toggleMenu,
        addToCart,
        removeFromCart,
        addToFavorites,
        removeFromFavorites,
        createOrder
    };
};

export default useInitialState;