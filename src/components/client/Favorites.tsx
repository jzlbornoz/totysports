'use client'
import { AppContext } from '@/context/AppContex';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'
import empty from '../../assets/emptyCart.jpg';
import { Store } from './Store';

const Favorites = (): JSX.Element => {
    const { appState } = useContext(AppContext);
    const favoritesItems = appState.favorites
console.log(favoritesItems);
    if (favoritesItems.length > 0) {
        return (
            <Store jerseys={favoritesItems} />
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
                            Sin favoritos
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

export { Favorites }