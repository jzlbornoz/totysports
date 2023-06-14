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
            <section>
                <header>
                    <h2 className="text-xl font-bold text-third sm:text-3xl mt-[5vh]">Tus Ordenes de Compra</h2>

                    <p className="mt-4 text-gray-500">
                        Tu registro de las compras realizadas.
                    </p>
                    <p className=" text-gray-500">
                        Total de ordenes: {orders.length}
                    </p>
                </header>

                <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    {orders.map((order, index) => <OrderCard data={order} key={index} />)}
                </div>
            </section>
        </>
    )
}
export { Orders }