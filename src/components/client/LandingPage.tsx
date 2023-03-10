'use client'
import Image from 'next/image';
import style from '../../styles/components/LandingPage.module.css';
import Messi from '../../assets/messi-chest.jpg';
import Cr7 from '../../assets/cr7.jpg';
import Modric from '../../assets/modric.jpeg';
import Italy from '../../assets/italy.webp';
import Logo from '../../assets/logo.png'

import { motion } from "framer-motion"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesPacking, faFileCircleCheck } from '@fortawesome/free-solid-svg-icons';
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
            }
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
        <section className={style.Home}>
            <section className={style['Home-Landing']}>
                <Image src={Messi} alt='messi image' width={1200} className={style['Home-Landing-Image']} />
                <div className={style['Home-Landing-Content']}>
                    <motion.section
                        initial='hiddenLeft'
                        whileInView={appState.menuIsOpen ? ' ' : 'show'}
                        variants={item}
                    >
                        <div>
                            <h2>Siéntete como <br /> un profesional</h2>
                        </div>
                        <Image src={Logo} alt='Logo' width={1400} />
                    </motion.section>
                    <Link href="/store">
                        <motion.button type='button'
                            initial='hiddenLeft'
                            whileInView={appState.menuIsOpen ? ' ' : 'show'}
                            whileHover='hover'
                            whileTap='tap'
                            variants={item}
                        >
                            Adquiere tu Jersey
                        </motion.button>
                    </Link>

                </div>

            </section>

            <section className={style['Home-Envios']}>
                <Image src={Cr7} alt='Cr7 image' />
                <motion.div
                    initial='hiddenRight'
                    whileInView={appState.menuIsOpen ? ' ' : 'show'}
                    variants={item}>
                    <p>
                        Nuestros Jerseys son traídos directamente de Estados Unidos y
                        entregados en cualquier parte de Venezuela
                    </p>
                    <FontAwesomeIcon icon={faBoxesPacking} />
                </motion.div>
            </section>

            <section className={style['Home-Frase']}>
                <motion.p
                    initial='hiddenLeft'
                    whileInView={appState.menuIsOpen ? ' ' : 'show'}
                    variants={item}
                >
                    No necesitas ser un profesional para tener alta gama
                </motion.p>
                <Link href="/store">
                    <motion.button type='button'
                        initial='hiddenRight'
                        whileInView={appState.menuIsOpen ? ' ' : 'show'}
                        whileHover='hover'
                        whileTap='tap'
                        variants={item}
                    >
                        Adquiere tu Jersey
                    </motion.button>
                </Link>
            </section>

            <section className={style['Home-Pedidos']}>
                <Image src={Modric} alt='Modric image' width={1200} />
                <motion.div
                    initial='hiddenLeft'
                    whileInView={appState.menuIsOpen ? ' ' : 'show'}
                    variants={item}
                >
                    <p>
                        Estamos capacitados para realizar pedidos por
                        encargo de cualquier Jersey que desees
                    </p>
                    <FontAwesomeIcon icon={faFileCircleCheck} />
                </motion.div>
            </section>

            <section className={style['Home-About']}>
                <Image src={Italy} alt='Italy image' width={2200} />
                <div>
                    <motion.h2
                        initial='hiddenRight'
                        whileInView={appState.menuIsOpen ? ' ' : 'show'}
                        variants={item}
                    >
                        Acerca de
                        nosotros
                    </motion.h2>
                    <motion.p
                        initial='hiddenLeft'
                        whileInView={appState.menuIsOpen ? ' ' : 'show'}
                        variants={item}
                    >
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
                    </motion.p>
                </div>
            </section>
        </section >
    )
}

export { LandingPage }