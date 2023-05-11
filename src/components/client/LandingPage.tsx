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
        <section className="text-gray-600 body-font mt-[11vh] h-[90vh]">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-6xl text-5xl mb-4 font-medium text-original font-extrabold">Siéntete como
                        <br className="hidden lg:inline-block" />un profesional
                    </h1>
                    <div className="flex justify-center mt-[7vh]">
                        <Link href="/store">
                            <motion.button
                                initial='hiddenLeft'
                                whileInView={appState.menuIsOpen ? ' ' : 'show'}
                                whileHover='hover'
                                whileTap='tap'
                                variants={item}
                                className="inline-flex text-third bg-original border-0 py-3 px-8 focus:outline-none hover:bg-primary hover:text-original rounded text-2xl">
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
    )
}

export { LandingPage }