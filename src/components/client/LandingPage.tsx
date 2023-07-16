'use client'
import { useContext } from 'react';
import { AppContext } from '@/context/AppContex';
import Link from 'next/link';
import Image from 'next/image';

import LFC from '../../assets/liverpool.jpeg';
import PSG from '../../assets/psg.jpg';
import Arsenal from '../../assets/arsenal.jpg';
import Cr7 from '../../assets/cr7.jpg';
import Juve from '../../assets/juventus.jpg';
import Modric from '../../assets/modric.jpeg';
import Italy from '../../assets/italy.webp';
import City from '../../assets/city.webp';
import Logo from '../../assets/logo.png'

import { motion } from "framer-motion"

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
    //--
    return (
        <>
            <section className="relative text-gray-600 body-font mt-[11vh] min-h-[90vh]
             bg-[url(https://i.pinimg.com/originals/d9/b3/71/d9b3711e630e2457d8a4a809f7b5e534.jpg)] 
             bg-cover bg-center bg-no-repeat lg:bg-[url(https://www.gianlucatamorri.com/files/gimgs/103_neg238152.jpg)]  "
            >
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h2 className="title-font sm:text-6xl text-5xl mb-4 text-pink font-extrabold">Siéntete como
                            <br className="hidden lg:inline-block" /> un profesional
                        </h2>
                        <div className="flex justify-center mt-[7vh]">
                            <Link href="/store">
                                <motion.span
                                    initial='hiddenLeft'
                                    whileInView={appState.menuIsOpen ? ' ' : 'show'}
                                    whileHover='hover'
                                    whileTap='tap'
                                    variants={item}
                                    className="inline-flex text-third bg-pink border-0 w-full px-12 py-3 focus:outline-none hover:bg-third rounded text-2xl">
                                    Adquiere tu jersey
                                </motion.span>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image className="object-cover object-center rounded" alt="hero" src={Logo} width={400} height={400} />
                    </div>
                </div>
            </section>
            <section
                className="relative bg-[url(https://i.eurosport.com/2023/01/11/3522753-71802228-2560-1440.jpg)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-black/75 sm:from-black/95 sm:to-black/25 ltr:sm:bg-gradient-to-r"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-3xl sm:text-5xl md:text-left font-extrabold text-original">
                            Contamos con la

                            <strong className="block font-extrabold">
                                mejor calidad
                            </strong>
                        </h2>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-secundary md:text-left text-white">
                            Nuestros Jerseys son traídos directamente de Estados Unidos y
                            entregados en cualquier parte de Venezuela
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 sm:pt-12 lg:px-8 bg-third">
                    <header className="text-center">
                        <h2 className="text-3xl sm:text-5xl font-bold text-white">
                            Nueva temporada
                        </h2>

                        <p className="max-w-md mx-auto mt-4 text-gray-500">
                            La espera ha terminado! Las camisetas de la nueva temporada de las principales ligas europeas
                            ya están aquí.¡No te quedes sin la tuya y presume los colores de tu equipo con estilo y pasión!
                        </p>
                    </header>

                    <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                        <motion.li
                            initial='hiddenLeft'
                            whileInView={appState.menuIsOpen ? ' ' : 'show'}
                            variants={item}
                        >
                            <Link href="/store/24" className="relative block group">
                                <Image
                                    src={LFC}
                                    alt="Liverpool"
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />

                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <h3 className="text-xl font-medium text-white">Liverpool FC 23/24</h3>

                                    <span
                                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                    >
                                        Comprar
                                    </span>
                                </div>
                            </Link>
                        </motion.li>

                        <motion.li
                            initial='hiddenRight'
                            whileInView={appState.menuIsOpen ? ' ' : 'show'}
                            variants={item}
                        >
                            <Link href="/store/26" className="relative block group">
                                <Image
                                    src={Juve}
                                    alt="Juve"
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />

                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <h3 className="text-xl font-medium text-white">Juventus FC 23/24</h3>

                                    <span
                                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                    >
                                        Comprar
                                    </span>
                                </div>
                            </Link>
                        </motion.li>

                        <motion.li
                            initial='hiddenLeft'
                            whileInView={appState.menuIsOpen ? ' ' : 'show'}
                            variants={item}
                            className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                            <Link href="/store/3" className="relative block group">
                                <Image
                                    src={Italy}
                                    alt="Italy"
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />

                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <h3 className="text-xl font-medium text-white">Italia Local 23/24</h3>
                                    <span
                                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                    >
                                        Comprar
                                    </span>
                                </div>
                            </Link>
                        </motion.li>
                    </ul>
                </div>
                <div className="max-w-screen-xl px-4 mx-auto pb-8 sm:px-6 sm:pb-12 lg:px-8 bg-third">
                    <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                        <motion.li
                            initial='hiddenLeft'
                            whileInView={appState.menuIsOpen ? ' ' : 'show'}
                            variants={item}
                        >
                            <Link href="/store/29" className="relative block group">
                                <Image
                                    src={Arsenal}
                                    alt="Arsenal"
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />

                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <h3 className="text-xl font-medium text-white">Arsenal 23/24</h3>

                                    <span
                                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                    >
                                        Comprar
                                    </span>
                                </div>
                            </Link>
                        </motion.li>

                        <motion.li
                            initial='hiddenRight'
                            whileInView={appState.menuIsOpen ? ' ' : 'show'}
                            variants={item}
                        >
                            <Link href="/store/26" className="relative block group">
                                <Image
                                    src={PSG}
                                    alt="PSG"
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />

                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <h3 className="text-xl font-medium text-white">Paris Saint-Germain 2022/23</h3>


                                    <span
                                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                    >
                                        Comprar
                                    </span>
                                </div>
                            </Link>
                        </motion.li>

                        <motion.li
                            initial='hiddenLeft'
                            whileInView={appState.menuIsOpen ? ' ' : 'show'}
                            variants={item}
                            className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                            <Link href="/store/28" className="relative block group">
                                <Image
                                    src={City}
                                    alt="City"
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />

                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <h3 className="text-xl font-medium text-white">Manchester City 23/24</h3>
                                    <Link href="/store/3">
                                        <span
                                            className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                        >
                                            Comprar
                                        </span>
                                    </Link>

                                </div>
                            </Link>
                        </motion.li>
                    </ul>
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
                            <Link href="/store">
                                <motion.button
                                    initial='hiddenRight'
                                    whileInView={appState.menuIsOpen ? ' ' : 'show'}
                                    whileHover='hover'
                                    whileTap='tap'
                                    variants={item}
                                    className="inline-flex text-third bg-original border-0 px-12 py-3 
                                focus:outline-none hover:bg-primary hover:text-original rounded text-xl">
                                    Ir a la tienda
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>

                <Image
                    alt="Modric"
                    src={Modric}
                    width={1200}
                    height={1200}
                    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] 
                    sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                />
            </section>

            <section className="text-gray-600 body-font bg-white">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h2 className="title-font font-extrabold  text-3xl sm:text-5xl mb-4 text-secundary">Se parte
                            <br className="hidden lg:inline-block" /> de nuestro equipo
                        </h2>
                        <p className="mb-8 leading-relaxed text-third">
                            <span>Únete a la familia TOTY Sports</span> y lleva lo mejor
                            del deporte a tu negocio
                            con nuestras opciones al por mayor, de alta calidad y precios competitivos.
                        </p>
                        <div className="flex justify-center">
                            <Link href='/form'>
                                <motion.button
                                    initial='hiddenRight'
                                    whileInView={appState.menuIsOpen ? ' ' : 'show'}
                                    whileHover='hover'
                                    whileTap='tap'
                                    type='button'
                                    variants={item}
                                    className="inline-flex text-white bg-success border-0 w-full px-12 py-3 focus:outline-none hover:bg-primary hover:text-original rounded text-xl">
                                    Contactanos
                                </motion.button>
                            </Link>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image className="object-cover object-center rounded" alt="hero" src={Cr7} />
                    </div>
                </div>
            </section>

            <section className="text-third body-font bg-white dark:bg-third">
                <div className="container px-5 py-24 mx-auto">
                    <h2 className="font-extrabold  text-3xl sm:text-5xl title-font text-third mb-12 text-center dark:text-white">Acerca de
                        nosotros</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 w-full drop-shadow-xl">
                            <div className="h-full bg-gray-100 p-8 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h245.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h245.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>
                                <p className="leading-relaxed mb-6">
                                    Toty sports es un proyecto único dedicado a la distribución legítima de nuestros productos enfocados
                                    en el área deportiva. Nos basamos desde la inspiración de los protagonistas, hasta cada aspecto que
                                    nos representa y une por la misma pasión que nos rodea a todos, cada símbolo, color y expresión han sido
                                    significativos desde nuestras raíces. Toty sports promoverá  ropa deportiva
                                    de alta calidad y gusto para jóvenes
                                    y adultos. La tienda es de tipo unipersonal y contamos con una firma propia de alta calidad que
                                    queremos que penetre fuertemente en el mercado con el nombre de marcas prestigiosas, así mismo,
                                    con marcas y modelos única y exclusivamente con el nombre de nuestra empresa. La diversidad
                                    de productos de todo tipo de peculiaridades deportivas,
                                    hace que todo deporte tenga su “rinconcito”en nuestra tienda.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export { LandingPage }