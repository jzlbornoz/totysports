'use client'
import React, { useContext } from 'react'
import { AppContext } from '@/context/AppContex';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseCircleCheck, faStore, faPiggyBank, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/components/Menu.module.css'

import { motion } from "framer-motion";


const Menu = () => {

    const { appState, toggleMenu } = useContext(AppContext);

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

    // ---
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
                            <p onClick={() => toggleMenu()}>Store</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='/stock'>
                            <FontAwesomeIcon icon={faHouseCircleCheck} />
                            <p onClick={() => toggleMenu()}>In Stock</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='/cart'>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <p onClick={() => toggleMenu()}>Cart</p>
                        </Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPiggyBank} />
                        <p onClick={() => toggleMenu()}>Sale</p>
                    </li>
                </ul>
                <h3 onClick={() => toggleMenu()}>Contact</h3>

            </div>

        </motion.section >
    )
}

export { Menu }