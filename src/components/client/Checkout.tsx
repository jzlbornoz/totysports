'use client'
import { AppContext } from '@/context/AppContex';
import { JerseyModel } from '@/models/jersey.model';
import React, { useContext, useRef, useState } from 'react'

import Link from 'next/link';

import Logo from '../../assets/logo.png'
import Image from 'next/image';
import { OrderModel } from '@/models/order.model';

const Checkout = () => {
    const { appState, createOrder } = useContext(AppContext);
    const cartItems: (JerseyModel[] | number) = appState.cart;

    const finalPrice = cartItems.reduce((acc, currentValue) => acc + currentValue.sale, 0);
    const discount = cartItems.length <= 3 ? cartItems.length * 10 : cartItems.length * 15;
    const priceWithDiscount = finalPrice - discount;

    const vzlaStates = ["Amazonas", "Anzoátegui", "Apure", "Aragua",
        "Barinas", "Bolívar", "Carabobo", "Cojedes", "Delta Amacuro", "Dependencias Federales", "Distrito Federal", "Falcón",
        "Guárico", "Lara", "Mérida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre",
        "Táchira", "Trujillo", "Vargas", "Yaracuy", "Zulia"]

    const generateMessage = (): string => {
        const items = cartItems.map(item => `${item.name} (Talla: ${item.size}): ${item.sale}$`).join('/');
        const message = `¡Hola! Gracias por su compra en Toty Sports. A continuación se detallan los productos que ha ordenado y su respectivo precio: ${items}. Total a pagar: ${priceWithDiscount}$. Por favor, realice el pago en la cuenta bancaria siguiente: Banco: "Y", Número de cuenta: XXXXXXXXXXXX, Nombre del titular: "Y", Monto: ${priceWithDiscount}$. Una vez hecho el pago, envíe el comprobante a este número de Whatsapp para procesar su orden. Gracias por su preferencia y quedamos atentos a cualquier consulta.`
        return message;
    };

    // Orden 
    const [order, setOrder] = useState<OrderModel>({
        id: Math.floor(Math.random() * 1000000),
        amount: priceWithDiscount,
        buyer: {
            name: "",
            lastName: "",
            address: "",
            email: "",
            phone: ""
        },
        items: appState.cart
    })

    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const stateRef = useRef<HTMLSelectElement>(null);
    const postalCodeRef = useRef<HTMLInputElement>(null);

    /*useEffect(() => {
        setOrder((prev) => ({
            ...prev,
            size: [selectedSizeOption],
        }));
    }, [selectedSizeOption])*/

    return (

        < section className='mt-[10vh]'>
            <h1 className="sr-only">Checkout</h1>

            <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
                <div className="bg-gray-50 py-12 md:py-24">
                    <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
                        <div className="flex items-center gap-4">
                            <Image className="h-10 w-10" src={Logo} width={60} height={60} alt="Logo" />

                            <h2 className="font-medium text-gray-900">TOTY Sports</h2>
                        </div>

                        <div>
                            <p className="text-2xl font-medium tracking-tight text-gray-900">
                                {priceWithDiscount}$
                            </p>

                            <p className="mt-1 text-sm text-gray-600">Por la compra de:</p>
                        </div>

                        <div>
                            <div className="flow-root">
                                <ul className="-my-4 divide-y divide-gray-100">
                                    {cartItems.map(item => <li className="flex items-center gap-4 py-4" key={item.id}>
                                        <Image
                                            src={item.img[0]}
                                            alt={item.name}
                                            width={80}
                                            height={80}
                                            className="h-16 w-16 rounded object-cover"
                                        />

                                        <div>
                                            <h3 className="text-sm text-gray-900">{item.name}</h3>

                                            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                <div>
                                                    <dt className="inline">Size:</dt>
                                                    <dd className="inline">{item.size[0]}</dd>
                                                </div>

                                                {item.players ? <div>
                                                    <dt className="inline">Dorsal:</dt>
                                                    <dd className="inline">{item.players[0]}</dd>
                                                </div> : null}
                                            </dl>
                                        </div>
                                    </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white py-12 md:py-24">
                    <div className="mx-auto max-w-lg px-4 lg:px-8">
                        <form className="grid grid-cols-6 gap-4">
                            <div className="col-span-3">
                                <label
                                    htmlFor="FirstName"
                                    className="block text-xs font-medium text-gray-700"
                                >
                                    Nombre
                                </label>

                                <input
                                    type="text"
                                    id="FirstName"
                                    ref={firstNameRef}
                                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm text-third"
                                />
                            </div>

                            <div className="col-span-3">
                                <label
                                    htmlFor="LastName"
                                    className="block text-xs font-medium text-gray-700"
                                >
                                    Apellido
                                </label>

                                <input

                                    type="text"
                                    id="LastName"
                                    ref={lastNameRef}
                                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm text-third"
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-xs font-medium text-gray-700">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="Email"
                                    ref={emailRef}
                                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm text-third"
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
                                    Telefono
                                </label>

                                <input
                                    type="tel"
                                    id="Phone"
                                    ref={phoneRef}
                                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm text-third"
                                />
                            </div>
                            <fieldset className="col-span-6">
                                <legend className="block text-sm font-medium text-gray-700">
                                    Dirección de Envio
                                </legend>

                                <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                    <div>
                                        <label htmlFor="State" className="sr-only">Estado</label>

                                        <select
                                            id="State"
                                            ref={stateRef}
                                            className="relative text-third w-full rounded-t-md border-gray-200 
                                            focus:z-10 sm:text-sm"
                                        >
                                            {vzlaStates.map(state => <option key={state}>{state}</option>)}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="PostalCode">Código postal </label>

                                        <input
                                            type="text"
                                            id="PostalCode"
                                            placeholder="Código postal"
                                            ref={postalCodeRef}
                                            className="relative w-full rounded-b-md border-gray-200 focus:z-10 
                                            sm:text-sm text-third"
                                        />
                                    </div>
                                </div>
                            </fieldset>

                            <div className="col-span-6">
                                <button
                                    type='button'
                                    onClick={() => {

                                        const name = firstNameRef.current?.value;
                                        const lastName = lastNameRef.current?.value;
                                        const phone = phoneRef.current?.value;
                                        const address = stateRef.current?.value;
                                        const email = emailRef.current?.value;

                                        if (name && lastName && phone && address && email) {
                                            setOrder((prev) => ({
                                                ...prev,
                                                buyer: {
                                                    name: name,
                                                    lastName: lastName,
                                                    phone: phone,
                                                    address: address,
                                                    email: email
                                                }

                                            }))
                                            console.log("order", order);
                                        } else {
                                            console.log("datos incompletos")
                                        }
                                    }}
                                    className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                                >
                                    Pay Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </section >

    )
}

export { Checkout }