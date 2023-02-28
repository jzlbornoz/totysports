import Image from 'next/image';
import style from '../styles/components/LandingPage.module.css';
import Messi from '../assets/messi-chest.jpg';
import Cr7 from '../assets/cr7.jpg';
import Logo from '../assets/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckRampBox } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
    return (
        <section className={style.Home}>
            <section className={style['Home-Landing']}>
                <Image src={Messi} alt='messi image' width={1200} className={style['Home-Landing-Image']} />
                <div className={style['Home-Landing-Content']}>
                    <div>
                        <h3>Siéntete como <br /> un profesional</h3>
                        <p>Adquiere tu Jersey</p>
                    </div>
                    <Image src={Logo} alt='Logo' />
                </div>
            </section>
            <section className={style['Home-Envios']}>
                <Image src={Cr7} alt='Cr7 image' />
                <div>
                    <p>Envios a lo largo de Venezuela y Estados
                        Unidos</p>
                    <FontAwesomeIcon icon={faTruckRampBox} width={230} />
                </div>
            </section>
        </section>
    )
}

export { LandingPage }