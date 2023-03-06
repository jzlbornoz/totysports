import Image from 'next/image';
import style from '../styles/components/LandingPage.module.css';
import Messi from '../assets/messi-chest.jpg';
import Cr7 from '../assets/cr7.jpg';
import Modric from '../assets/modric.jpeg';
import Logo from '../assets/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesPacking, faFileCircleCheck } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {

    return (
        <section className={style.Home}>
            <section className={style['Home-Landing']}>
                <Image src={Messi} alt='messi image' width={1200} className={style['Home-Landing-Image']} />
                <div className={style['Home-Landing-Content']}
                >
                    <section>
                        <div >
                            <h2>Siéntete como <br /> un profesional</h2>
                        </div>
                        <Image src={Logo} alt='Logo' width={1400} />
                    </section>
                    <button type='button' >
                        Adquiere tu Jersey
                    </button>
                </div>

            </section>
            <section className={style['Home-Envios']}>
                <Image src={Cr7} alt='Cr7 image' />
                <div>
                    <p>
                        Nuestros Jerseys son traídos directamente de Estados Unidos y
                        entregados en cualquier parte de Venezuela
                    </p>
                    <FontAwesomeIcon icon={faBoxesPacking} width={140} />
                </div>
            </section>
            <section className={style['Home-Pedidos']}>
                <Image src={Modric} alt='Modric image' width={1200} />
                <div>
                    <p>
                        Estamos capacitados para realizar pedidos por
                        encargo de cualquier Jersey que desees
                    </p>
                    <FontAwesomeIcon icon={faFileCircleCheck} width={140} />
                </div>
            </section>
            <section className={style['Home-Frase']}>
                <p>No necesitas ser un profesional para tener alta gama</p>
                <button type='button'>Adquiere tu Jersey</button>
            </section>
            <section className={style['Home-About']}>
                <h2>Acerca de
                    nosotros</h2>
                <p>
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
            </section>
        </section>
    )
}

export { LandingPage }