import { OrderModel } from '@/models/order.model'
import Link from 'next/link'
import React from 'react'

const OrderCard = ({ data }: { data: OrderModel }) => {
    return (
        <Link
            href={`/orders/${data.id}`}
            className="group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8"
        >
            <div>
                <h3 className="text-2xl font-bold text-secondary sm:text-5xl">#{data.id}</h3>

                <div className="mt-4 border-t-2 border-gray-100 pt-4">
                    <p className="text-sm font-medium  text-third">{`Monto: ${data.amount}`}</p>
                    <p className="text-sm font-medium  text-third">{`Artículos: ${data.items.length}`}</p>
                    <p className="text-sm font-medium  text-third">{`Fecha: ${data.items.length}`}</p>
                </div>
            </div>

            <div
                className="mt-8 inline-flex items-center gap-2 text-primary sm:mt-12 lg:mt-16"
            >
                <p className="font-medium sm:text-lg">Información</p>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transition-all group-hover:ms-3 rtl:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
            </div>
        </Link>

    )
}

export { OrderCard }