'use client'
import { AppContext } from '@/context/AppContex';
import React, { useContext } from 'react'
import styles from '../../styles/components/Cart.module.css';
import { JerseyMiniCard } from './JerseyMiniCard';

const Cart = () => {
    const { appState } = useContext(AppContext);
    const cartItems = appState.cart;
    return (
        <section className={styles.Cart}>
            <h2>Cart</h2>
            <ul>
                <li>{cartItems.map(item => <JerseyMiniCard jersey={item} key={item.id} />)}</li>
            </ul>
            <p> <span>Items: </span> 10</p>
            <p> <span>Monto Total: </span> 1022$</p>
            <p> <span>Descuento: </span> 20</p>
            <p> <span>Monto Final: </span> 888$</p>
        </section>

    )
}

export { Cart }