'use client'
import React, { useContext } from 'react'
import Image from 'next/image';
import { AppContext } from '@/context/AppContex';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapLocationDot, faShirt, faCalendarDays, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const OrderPage = ({ orderId }: { orderId: string }) => {

    const { appState } = useContext(AppContext);
    const order = appState.orders.find((order) => order.id === parseInt(orderId));

    if (order) {
        return (
            <section className="text-gray-600 body-font bg-white">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap w-full">
                        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex 
                                items-center justify-center text-white relative z-10">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        Comprador
                                    </h2>
                                    <p className="leading-relaxed">{order.buyer.name}</p>
                                    <p className="leading-relaxed">{order.buyer.lastName}</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex 
                                items-center justify-center text-white relative z-10">
                                    <FontAwesomeIcon icon={faMapLocationDot} />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        Direccion
                                    </h2>
                                    <p className="leading-relaxed">{order.buyer.address}</p>
                                    <p className="leading-relaxed">{order.buyer.phone}</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex 
                                items-center justify-center text-white relative z-10">
                                    <FontAwesomeIcon icon={faShirt} />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        Articulos
                                    </h2>
                                    {order.items.map((item, index) => <p className="leading-relaxed" key={index}>
                                        {`${item.name} - Talla: ${item.size[0]}`}
                                    </p>)}
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex 
                                items-center justify-center text-white relative z-10">
                                    <FontAwesomeIcon icon={faCalendarDays} />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        Fecha
                                    </h2>
                                    <p className="leading-relaxed">{order.id}</p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex 
                                items-center justify-center text-white relative z-10">
                                    <FontAwesomeIcon icon={faMoneyBill} />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        Monto
                                    </h2>
                                    <p className="leading-relaxed">{order.amount}$</p>
                                </div>
                            </div>
                        </div>
                        <Image className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                            src={order.items[0].img[0]} width={800} height={800} alt="step" />
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <div className="grid h-screen px-4 bg-white place-content-center">
                <h1 className="tracking-widest text-gray-500 uppercase"> 404 | Not Found</h1>
            </div>
        )
    }
}

export { OrderPage }