import React from 'react'
import styles from '../styles/components/Menu.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleCheck, faStore, faPiggyBank, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return (
        <section className={styles.Menu}>
            <div className={styles['Menu-Wrapped']}>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <p>Cart</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStore} />
                        <p>Store</p>
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
        </section>
    )
}

export { Menu }