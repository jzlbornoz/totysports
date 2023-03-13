import styles from '../styles/components/Footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.Footer}>

            <section className={styles['Footer-Container']}>
                <div className={styles['Footer-Contact']}>
                    <h3>Contactanos</h3>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} width={26} />
                        <Link href='https://instagram.com/totysports?igshid=YmMyMTA2M2Y='>
                            <p>totysports</p>
                        </Link>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faWhatsapp} width={26} />
                        <p>+1(407) 952-6875</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelopeOpen} width={26} />
                        <p>mail</p>
                    </div>
                </div>
                <div className={styles['Footer-Address']}>
                    <h3>Dirección</h3>
                    <p>
                        Winter Garden FL. 34787 USA
                    </p>
                    <p>
                        Av. Las Americas, Merida-Venezuela (5101)
                    </p>
                </div>
            </section>
            <p>
                © Totysports, Inc., 2023. All Rights Reserved.
                No portion of this site may be reproduced or duplicated without the express permission of Totysports, Inc.
            </p>
        </footer>
    )
}

export { Footer }