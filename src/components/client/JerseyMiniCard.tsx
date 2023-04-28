import { JerseyModel } from '@/models/jersey.model'
import Image from 'next/image'
import React, { useContext } from 'react'
import styles from '../../styles/components/JerseyMiniCard.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '@/context/AppContex';


const JerseyMiniCard = ({ jersey }: { jersey: JerseyModel }) => {

    const { removeFromCart } = useContext(AppContext);

    return (
        <div className={styles.JerseyMiniCard}>
            <div className={styles['JerseyMiniCard-Img-Container']}>
                <Image src={jersey.img[0]} alt={jersey.name} height={800} width={800} />
            </div>
            <div className={styles['JerseyMiniCard-Content']}>
                {jersey.name.length > 24
                    ? `${jersey.name.slice(0, 24).trimEnd().toUpperCase()}...`
                    : jersey.name.toUpperCase()}
                <div>
                    <p>{jersey.sale}$</p>
                    <p>Talla: {jersey.size}</p>
                    {jersey.players && <p>Player: {jersey.players[0]}</p>}
                </div>
            </div>
            <FontAwesomeIcon icon={faTrashCan} onClick={() => removeFromCart(jersey)} />
        </div>
    )
}

export { JerseyMiniCard }