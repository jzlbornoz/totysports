'use client'
import React, { useContext } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { AppContext } from '@/context/AppContex';
import { JerseyModel } from '@/models/jersey.model';
import { JerseyMiniCard } from './JerseyMiniCard';
import empty from '../../assets/emptyCart.jpg';

const Cart = () => {
    const { appState } = useContext(AppContext);
    const cartItems: (JerseyModel[] | number) = appState.cart;
    const finalPrice = cartItems.reduce((acc, currentValue) => acc + currentValue.sale, 0);
    const discount = cartItems.length <= 3 ? cartItems.length * 5 : cartItems.length * 10;



    if (appState.cart.length > 0) {
        return (
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-white mt-[11vh]">
                <div className="mx-auto max-w-3xl">
                    <header className="text-center">
                        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
                    </header>

                    <div className="mt-8">
                        <ul className="space-y-4"
                        >
                            {cartItems.map(item => <li
                                key={item.id + Math.random()}
                                className="flex items-center gap-4"
                            >

                                <JerseyMiniCard jersey={item} />
                            </li>)}

                        </ul>

                        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                            <div className="w-screen max-w-lg space-y-4">
                                <dl className="space-y-0.5 text-sm text-gray-700">
                                    <div className="flex justify-between">
                                        <dt>Subtotal</dt>
                                        <dd>{finalPrice} $</dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt>Discount</dt>
                                        <dd>-{discount} $</dd>
                                    </div>

                                    <div className="flex justify-between !text-base font-medium">
                                        <dt>Total</dt>
                                        <dd>{finalPrice - discount}$</dd>
                                    </div>
                                </dl>
                                <div className="flex justify-end">
                                    <Link href="/checkout">
                                        <button className="block rounded
                                         bg-third px-5 py-3 text-sm text-gray-100 
                                         transition hover:bg-gray-600"
                                            type='button'
                                        >
                                            Checkout
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col h-screen bg-white mt-[11vh]">
                <Image
                    src={empty}
                    alt="Error"
                    className="object-cover w-full h-64"
                />

                <div className="flex items-center justify-center flex-1">
                    <div className="max-w-xl px-4 py-8 mx-auto text-center">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Carrito de compras vacio
                        </h1>

                        <p className="mt-4 text-gray-500">
                            Explora nuestra tienda y agrega los articulos que mas te gusten
                        </p>

                        <Link
                            href="/store"
                            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-primary rounded hover:bg-original focus:outline-none focus:ring"
                        >
                            Ir a la tienda
                        </Link>
                    </div>
                </div>
            </div>


        )
    }
}

export { Cart }