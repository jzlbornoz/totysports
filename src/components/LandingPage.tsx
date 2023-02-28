import Image from 'next/image';
import style from '../styles/components/LandingPage.module.css';
import Messi from '../assets/messi-chest.jpg';
import Logo from '../assets/logo.png'

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
        </section>
    )
}

export { LandingPage }