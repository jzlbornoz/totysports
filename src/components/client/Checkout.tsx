'use client'
import { AppContext } from '@/context/AppContex';
import { JerseyModel } from '@/models/jersey.model';
import React, { useContext } from 'react'
import { JerseyMiniCard } from './JerseyMiniCard';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import styles from '../../styles/components/Checkout.module.css';
import Link from 'next/link';

const Checkout = () => {
    const { appState } = useContext(AppContext);
    const cartItems: (JerseyModel[] | number) = appState.cart;
    const finalPrice = cartItems.reduce((acc, currentValue) => acc + currentValue.sale, 0);
    const discount = cartItems.length <= 3 ? cartItems.length * 10 : cartItems.length * 15;
    const priceWithDiscount = finalPrice - discount;
   
    const generateMessage = (): string => {
        const items = cartItems.map(item => `-${item.name} (Talla: ${item.size}): ${item.sale}$`).join('ㅤㅤㅤ');
        const message = `¡Hola! Gracias por su compra en Toty Sports. A continuación se detallan los productos que ha ordenado y su respectivo precio: ㅤㅤㅤ${items}. ㅤㅤㅤㅤㅤTotal a pagar: ${priceWithDiscount}$. ㅤㅤㅤㅤPor favor, realice el pago en la cuenta bancaria siguiente: Banco: "Y", Número de cuenta: XXXXXXXXXXXX, Nombre del titular: "Y", Monto: ${priceWithDiscount}$. ㅤㅤㅤㅤㅤㅤUna vez hecho el pago, envíe el comprobante a este número de Whatsapp para procesar su orden. Gracias por su preferencia y quedamos atentos a cualquier consulta.`
        return message;
    };


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
                    <p> <span>Monto Final:  </span> {priceWithDiscount} $</p>
                    <p> <span>Monto Final (VE):  </span> {(finalPrice - discount) * 25} Bs</p>
                    <p> <span>Tasa:  </span> 25bs</p>

                </div>
                <Link href={`https://wa.me/584247401208?text=${generateMessage()}`}>
                    <button>
                        <p>Confirmar</p>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </button>
                </Link>
            </div>
        </section>
    )
}

export { Checkout }