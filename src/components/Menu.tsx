'use client'
import React from 'react'
import styles from '../styles/components/Menu.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleCheck, faStore, faPiggyBank, faCartShopping } from '@fortawesome/free-solid-svg-icons';



import { motion } from "framer-motion";
import Link from 'next/link';

const Menu = () => {
    const item = {
        hiddenLeft: {
            opacity: 0,
            x: -100
        },
        hiddenRight: {
            opacity: 0,
            x: 100
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        },
    }

    return (
        <motion.section className={styles.Menu}
            initial='hiddenLeft'
            animate='show'
            exit='hiddenLeft'
            layoutScroll
            style={{ overflow: "hidden" }}
            variants={item}
        >

            <div className={styles['Menu-Wrapped']}>

                <ul>
                    <li>
                        <Link href='/store'>
                            <FontAwesomeIcon icon={faStore} />
                            <p>Store</p>
                        </Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <p>Cart</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faHeartCircleCheck} />
                        <p> Wish List</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPiggyBank} />
                        <p>Sale</p>
                    </li>
                </ul>
                <h3>Contact</h3>

            </div>

        </motion.section >
    )
}

export { Menu }