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

    if (appState.favorites.length > 0) {
        return (
            <main className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 mt-[11vh] bg-white">
                <nav aria-label="Breadcrumb">
                    <ol className="flex items-center gap-1 text-sm text-gray-600">
                        <li>
                            <Link href="/" className="block transition hover:text-gray-700">
                                Home
                            </Link>
                        </li>

                        <li className="rtl:rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </li>

                        <li>
                            <Link href="/store/favorites" className="block transition hover:text-gray-700"> Favoritos </Link>
                        </li>
                    </ol>
                </nav>
                <Store jerseys={favoritesItems} />
            </main>
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