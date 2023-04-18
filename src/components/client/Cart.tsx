'use client'
import { AppContext } from '@/context/AppContex';
import { JerseyModel } from '@/models/jersey.model';
import React, { useContext } from 'react'
import { JerseyMiniCard } from './JerseyMiniCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

import { motion } from 'framer-motion';

import styles from '../../styles/components/Cart.module.css';

const Cart = () => {
    const { appState } = useContext(AppContext);
    const cartItems: (JerseyModel[] | number) = appState.cart;
    const finalPrice = cartItems.reduce((acc, currentValue) => acc + currentValue.sale, 0);
    const discount = cartItems.length <= 3 ? cartItems.length * 10 : cartItems.length * 15;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
            }
        }
    }

    const itemMotion = {
        hidden: { opacity: 0, scale: 0 },
        show: { opacity: 1, scale: 1, },
    }

    const buttonMotion = {
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        },
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.7
            }
        },
        tap: {
            scale: 1.128,
            transition: {
                type: "spring", stiffness: 400, damping: 17,
            },

            color: "#FFFFFF",
            backgroundColor: '#468220'
        },
    }


    if (appState.cart.length > 0) {
        return (
            <section className={styles.Cart}>
                <h2>Cart</h2>
                <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {cartItems.map(item => <motion.li variants={itemMotion} key={item.id + Math.random()}>
                        <JerseyMiniCard jersey={item} />
                    </motion.li>)}
                </motion.ul>
                <div className={styles.CartContent}>
                    <p> <span>Items:  </span> {cartItems.length}</p>
                    <p> <span>Monto Total:  </span> {finalPrice} $</p>
                    <p> <span>Descuento:  </span> {discount} $</p>
                    <p> <span>Monto Final:  </span> {finalPrice - discount} $</p>
                </div>
                <motion.button
                    initial='show'
                    whileHover='hover'
                    whileTap='tap'
                    variants={buttonMotion}
                >Procesar Compra</motion.button>
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