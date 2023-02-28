import Image from 'next/image';
import style from '../styles/components/Home.module.css';
import Messi from '../assets/messi-chest.jpg';

const Home = () => {
    return (
        <section className={style.Home}>
            <Image src={Messi} alt='messi image' width={600} />

        </section>
    )
}

export { Home }