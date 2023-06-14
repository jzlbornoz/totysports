'use client'

import React, { useRef } from 'react'

const FormPage = () => {

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const businessRef = useRef<HTMLInputElement>(null);


    const handleSubmit = () => {

        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const phone = phoneRef.current?.value;
        const business = businessRef.current?.value;


        if (name && phone && email && business && business.length > 6) {
            const message = `¡Hola! Mi nombre es ${name}. Estoy interesado en comprar jerseys deportivos auténticos al por
             mayor para mi negocio "${business}". Me gustaría que TOTY Sports me facilite la lista de precios y catálogo de productos 
         disponibles al mayor. ¡Gracias!`
            if (typeof window !== 'undefined') {
                window.location.href = `https://api.whatsapp.com/send?phone=+14079526875&text=${message}`;
            }
        }
    }

    return (

        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 text-third">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <p className="max-w-xl text-lg text-third">
                            ¡Bienvenidos a TOTY Sports! Somos tu proveedor de jerseys deportivos auténticos al mayor.
                            Ofrecemos una amplia variedad de jerseys de los equipos más populares del mundo,
                            con excelentes planes de precios y planes de financiación. Llena nuestro formulario para contactarnos.
                        </p>

                        <div className="mt-8">
                            <a href="" className="text-2xl font-bold text-primary">
                                +14079526875
                            </a>

                            <address className="mt-2 not-italic">
                                Winter Garden FL. 34787 USA
                            </address>
                            <address className="mt-2 not-italic">
                                Av. Las Americas,
                                Merida-Venezuela (5101)
                            </address>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="" className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Nombre</label>
                                <input
                                    ref={nameRef}
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        ref={emailRef}
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone</label>
                                    <input
                                        ref={phoneRef}
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Phone Number"
                                        type="tel"
                                        id="phone"
                                    />
                                </div>

                            </div>
                            <div>
                                <label className="sr-only" htmlFor="name">Negocio</label>
                                <input
                                    ref={businessRef}
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Business"
                                    type="text"
                                    id="name"
                                />
                            </div>

                            <div className="mt-4">
                                <button
                                    type="button"
                                    onClick={() => handleSubmit()}
                                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Enviar Mensaje
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export { FormPage }