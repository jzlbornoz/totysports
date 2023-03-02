import Image from 'next/image';
import style from '../styles/components/LandingPage.module.css';
import Messi from '../assets/messi-chest.jpg';
import Cr7 from '../assets/cr7.jpeg';
import Logo from '../assets/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
    return (
        <section className={style.Home}>
            <section className={style['Home-Landing']}>
                <Image src={Messi} alt='messi image' width={1200} className={style['Home-Landing-Image']} />
                <div className={style['Home-Landing-Content']}>
                    <div>
                        <h3>Siéntete como <br /> un profesional</h3>
                        <button type='button'>Adquiere tu Jersey</button>
                    </div>
                    <Image src={Logo} alt='Logo' width={1400} />
                </div>
            </section>
            <section className={style['Home-Envios']}>
                <Image src={Cr7} alt='Cr7 image' />
                <div>
                    <p>
                        Nuestros Jerseys son traídos directamente de Estados Unidos y
                        entregados en cualquier parte de Venezuela
                    </p>
                    <FontAwesomeIcon icon={faBoxesPacking} width={200} />
                </div>
            </section>
            <section className={style['Home-Frase']}>
                <p>No necesitas ser un profesional para tener alta gama</p>
                <button type='button'>Adquiere tu Jersey</button>
            </section>
        </section>
    )
}

export { LandingPage }