'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'

import { JerseyModel } from '@/models/jersey.model'
import { AppContext } from '@/context/AppContex'
import { LazyImage } from './LazyImage'

const JerseyCard = ({ jersey }: { jersey: JerseyModel }) => {
    const { addToCart, appState, addToFavorite } = useContext(AppContext);

    return (
        <section className="group relative block overflow-hidden">
            <button
                className={`absolute end-4 top-4 z-10 rounded-full p-1.5 transition 
                ${(appState.favorites && appState.favorites.includes(jersey))
                        ? " bg-red-500  text-red-800 hover:text-gray-900/75"
                        : " bg-white text-gray-900  hover:text-gray-900/75"}`}
                type='button'
                onClick={() => {
                    addToFavorite(jersey)
                    console.log(appState.favorites);
                    console.log(jersey.id)
                }}
            >
                <span className="sr-only">Wishlist</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                </svg>
            </button>
            <Link href={`/store/${jersey.id}`}>
                <LazyImage
                    src={jersey.img[0]}
                    alt=""
                    width={1200}
                    height={1200}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-96 bg-slate-500"
                />
            </Link>


            <div className="relative border border-gray-100 bg-white p-6">
                <span
                    className="whitespace-nowrap bg-primary px-3 py-1.5 text-xs font-medium text-white"
                >
                    {jersey.season}
                </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900 md:truncate">{jersey.name}</h3>

                <p className="mt-1.5 text-sm text-gray-700">{jersey.sale}$</p>

                <form className="mt-4">
                    <button
                        className="block w-full rounded bg-primary text-white p-4 text-sm font-medium transition hover:scale-105"
                        onClick={() => addToCart(jersey)}
                        type='button'
                    >
                        Add to Cart
                    </button>
                </form>
            </div>
        </section>

    )
}

export { JerseyCard }