'use client'
import { AppContext } from "@/context/AppContex";
import { useContext } from "react";


export default function StorePage() {
    const { appState } = useContext(AppContext);
    const cartItems = appState.cart;
    return (
        <main>
            {cartItems.map(item => item.name)}
        </main>
    )
}
