'use client'
import { AppContext } from '@/context/AppContex';
import { OrderModel } from '@/models/order.model';
import React, { useContext } from 'react'
import { OrderCard } from './OrderCard'

const Orders = () => {

    const { appState } = useContext(AppContext);
    const orders: OrderModel[] = appState.orders

    return (
        <>
            <section className="bg-white mt-[10vh]">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl text-third">
                        Tus ordenes de compra
                    </h2>

                    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                        {orders.map((order, index) => <OrderCard data={order} key={index} />)}
                    </div>
                </div>
            </section>
        </>
    )
}
export { Orders }