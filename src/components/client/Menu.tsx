'use client'
import React, { useContext } from 'react'
import { AppContext } from '@/context/AppContex';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouseCircleCheck,
    faStore, faEarthAmerica, faCartShopping,
    faShieldHalved, faHeartCircleCheck,
    faFolderClosed
} from '@fortawesome/free-solid-svg-icons';

import { motion } from "framer-motion";


const Menu = () => {

    const { toggleMenu } = useContext(AppContext);

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
        <motion.div
            className="flex fixed top-0 left-0 h-screen flex-col justify-between border-e border-zinc-800
             bg-white dark:bg-zinc-900 pt-[10vh] overflow-y-scroll"
            initial='hiddenLeft'
            animate='show'
            exit='hiddenLeft'
            layoutScroll
            style={{ overflow: "hidden" }}
            variants={item}
        >
            <div className="px-4 py-6">
                <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
                    <Link
                        onClick={() => toggleMenu()}
                        href="/store"
                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500
                         hover:bg-gray-100 hover:text-gray-700"
                    >
                        <FontAwesomeIcon icon={faStore} />

                        <span className="text-sm font-medium"> Tienda </span>
                    </Link>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2
                             text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <div className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faHouseCircleCheck} />

                                <span className="text-sm font-medium">Stock</span>
                            </div>

                            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 
                                        1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
                            <Link
                                onClick={() => toggleMenu()}
                                href="#"
                                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500
                                 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <FontAwesomeIcon icon={faEarthAmerica} />

                                <span className="text-sm font-medium"> Naciones </span>
                            </Link>

                            <Link
                                onClick={() => toggleMenu()}
                                href="#"
                                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500
                                 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <FontAwesomeIcon icon={faShieldHalved} />


                                <span className="text-sm font-medium"> Equipos </span>
                            </Link>
                        </nav>
                    </details>

                    <Link
                        onClick={() => toggleMenu()}
                        href="/cart"
                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500
                         hover:bg-gray-100 hover:text-gray-700"
                    >
                        <FontAwesomeIcon icon={faCartShopping} />


                        <span className="text-sm font-medium"> Carro de compras </span>
                    </Link>

                    <Link
                        onClick={() => toggleMenu()}
                        href="favorites"
                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100
                         hover:text-gray-700"
                    >
                        <FontAwesomeIcon icon={faHeartCircleCheck} />

                        <span className="text-sm font-medium"> Favoritos </span>
                    </Link>
                    <Link
                        onClick={() => toggleMenu()}
                        href="orders"
                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100
                         hover:text-gray-700"
                    >
                        <FontAwesomeIcon icon={faFolderClosed} />

                        <span className="text-sm font-medium"> Ordenes </span>
                    </Link>

                    {/*<details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 opacity-75"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>

                                <span className="text-sm font-medium"> Account </span>
                            </div>

                            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <nav aria-label="Account Nav" className="mt-2 flex flex-col px-4">
                            <Link
                                href="#"
                                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 opacity-75"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                    />
                                </svg>

                                <span className="text-sm font-medium"> Details </span>
                            </Link>

                            <Link
                                href="#"
                                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 opacity-75"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>

                                <span className="text-sm font-medium"> Security </span>
                            </Link>

                            <form action="/logout">
                                <button
                                    type="submit"
                                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        />
                                    </svg>

                                    <span className="text-sm font-medium"> Logout </span>
                                </button>
                            </form>
                        </nav>
    </details> */}
                </nav>
            </div>
        </motion.div>

    )
}

export { Menu }