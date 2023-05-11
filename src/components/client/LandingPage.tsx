'use client'
import Image from 'next/image';
import style from '../../styles/components/LandingPage.module.css';
import Messi from '../../assets/messi-chest.jpg';
import Cr7 from '../../assets/cr7.jpg';
import Pedri from '../../assets/pedri.jpg';
import Modric from '../../assets/modric.jpeg';
import Italy from '../../assets/italy.webp';
import Logo from '../../assets/logo.png'

import { motion } from "framer-motion"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesPacking, faFileCircleCheck, faMedal } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { AppContext } from '@/context/AppContex';
import Link from 'next/link';

const LandingPage = () => {

    const { appState } = useContext(AppContext);

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
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.7
            },
            color: "#ffffff"
        },
        tap: {
            scale: 1.1,
            transition: {
                type: "spring", stiffness: 400, damping: 17,
            },

            color: "#909090",
            borderColor: "#909090"
        },
    }
    return (
        <>
            <section className="text-gray-600 body-font mt-[11vh] min-h-[90vh]">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-6xl text-5xl mb-4 font-medium text-original font-extrabold">Siéntete como
                            <br className="hidden lg:inline-block" /> un profesional
                        </h1>
                        <div className="flex justify-center mt-[7vh]">
                            <Link href="/store">
                                <motion.button
                                    initial='hiddenLeft'
                                    whileInView={appState.menuIsOpen ? ' ' : 'show'}
                                    whileHover='hover'
                                    whileTap='tap'
                                    variants={item}
                                    className="inline-flex text-third bg-original border-0 py-3 px-8 focus:outline-none hover:bg-primary hover:text-original rounded-full text-2xl">
                                    Adquiere tu jersey
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image className="object-cover object-center rounded" alt="hero" src={Logo} width={400} height={400} />
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-white min-h-[70vh]">
                <div className="gap-16 items-center justify-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-third">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-third">Contamos con la mejor calidad</h2>
                        <p className="mb-4"> Nuestros Jerseys son traídos directamente de Estados Unidos y
                            entregados en cualquier parte de Venezuela</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <Image className="w-full rounded-lg" src={Modric} alt="Messi" width={1200} height={1200} />
                        <Image className="mt-4 w-full lg:mt-10 rounded-lg" src={Cr7} alt="Cr7" width={1200} height={1200} />
                    </div>
                </div>
            </section>
            <section
                className="overflow-hidden bg-third sm:grid sm:grid-cols-2 sm:items-center"
            >
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div
                        className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
                    >
                        <h2 className="lg:text-6xl font-bold text-original md:text-3xl text-2xl ">
                            No necesitas ser un profesional para tener alta gama
                        </h2>

                        <div className="mt-4 md:mt-8">
                            <a
                                href="#"
                                className="inline-flex text-third bg-original border-0 py-1.5 px-4 focus:outline-none hover:bg-primary hover:text-original rounded-full text-xl">
                                Ir a la tienda
                            </a>
                        </div>
                    </div>
                </div>

                <Image
                    alt="Violin"
                    src={Italy}
                    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                />
            </section>

            <section className="text-gray-600 body-font bg-white">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font font-extrabold  text-4xl sm:text-4xl text-3xl mb-4 text-secundary">Se parte
                            <br className="hidden lg:inline-block" /> de nuestro equipo
                        </h1>
                        <p className="mb-8 leading-relaxed text-third">
                            <span>Únete a la familia TOTY Sports</span> y lleva lo mejor
                            del deporte a tu negocio
                            con nuestras opciones al por mayor, de alta calidad y precios competitivos.
                        </p>
                        <div className="flex justify-center">
                            <button
                                className="inline-flex text-white bg-success border-0 py-1.5 px-4 focus:outline-none hover:bg-primary hover:text-original rounded-full text-xl">
                                Contactanos
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image className="object-cover object-center rounded" alt="hero" src={Pedri} />
                    </div>
                </div>
            </section>


            <section
                className="overflow-hidden bg-[url(https://media.npr.org/assets/img/2022/12/18/gettyimages-1450109553_wide-67012065e2d8be481f82550a2a0e5257dcd90168-s1400-c100.jpg)] bg-cover bg-top bg-no-repeat"
            >
                <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                            Latest Shirts
                        </h2>

                        <p
                            className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
                            officia corporis quasi doloribus iure architecto quae voluptatum beatae
                            excepturi dolores.
                        </p>

                        <div className="mt-4 sm:mt-8">
                            <a
                                href="#"
                                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Yours Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export { LandingPage }