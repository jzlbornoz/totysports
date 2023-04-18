'use client'
import { AppContext } from '@/context/AppContex';
import { JerseyModel } from '@/models/jersey.model';
import React, { useContext } from 'react'
import { JerseyMiniCard } from './JerseyMiniCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/components/Cart.module.css';

const Cart = () => {
    const { appState } = useContext(AppContext);
    const cartItems: (JerseyModel[] | number) = appState.cart;
    const finalPrice = cartItems.reduce((acc, currentValue) => acc + currentValue.sale, 0);
    const discount = cartItems.length <= 3 ? cartItems.length * 10 : cartItems.length * 15;

    if (appState.cart.length > 0) {
        return (
            <section className={styles.Cart}>
                <h2>Cart</h2>
                <ul>
                    <li>{cartItems.map(item => <JerseyMiniCard jersey={item} key={item.id} />)}</li>
                </ul>
                <div className={styles.CartContent}>
                    <p> <span>Items:  </span> {cartItems.length}</p>
                    <p> <span>Monto Total:  </span> {finalPrice} $</p>
                    <p> <span>Descuento:  </span> {discount} $</p>
                    <p> <span>Monto Final:  </span> {finalPrice - discount} $</p>
                </div>
                <button>Procesar Compra</button>
            </section>

        )
    } else {
        return (
            <section className={styles.Cart}>
                <div className={styles.EmptyCart}>
                    <FontAwesomeIcon icon={faCartArrowDown} />
                    <p>Carrito de Compras vacio</p>
                </div>
            </section>

        )
    }
}

export { Cart }