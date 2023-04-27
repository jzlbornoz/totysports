'use client'
import { AppContext } from '@/context/AppContex';
import { JerseyModel } from '@/models/jersey.model';
import React, { useContext } from 'react'
import { JerseyMiniCard } from './JerseyMiniCard';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import styles from '../../styles/components/Checkout.module.css';

const Checkout = () => {
    const { appState } = useContext(AppContext);
    const cartItems: (JerseyModel[] | number) = appState.cart;
    const finalPrice = cartItems.reduce((acc, currentValue) => acc + currentValue.sale, 0);
    const discount = cartItems.length <= 3 ? cartItems.length * 10 : cartItems.length * 15;

    return (
        <section className={styles.Checkout}>
            <div className={styles['Checkout-Card']}>
                <h2>Orden</h2>
                <ul>
                    {cartItems.map(product => (
                        <li key={product.id} >
                            <JerseyMiniCard jersey={product} />
                        </li>
                    ))}
                </ul>
                <div className={styles['Checkout-Card-Content']}>
                    <p> <span>Items:  </span> {cartItems.length}</p>
                    <p> <span>Monto Total:  </span> {finalPrice} $</p>
                    <p> <span>Descuento:  </span> {discount} $</p>
                    <p> <span>Monto Final:  </span> {finalPrice - discount} $</p>
                    <p> <span>Monto Final (VE):  </span> {(finalPrice - discount) * 25} Bs</p>
                    <p> <span>Tasa:  </span> 25bs</p>

                </div>

                <button>
                    <p>Confirmar</p>
                    <FontAwesomeIcon icon={faWhatsapp} />
                </button>
            </div>
        </section>
    )
}

export { Checkout }