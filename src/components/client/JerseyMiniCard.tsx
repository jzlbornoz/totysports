import { JerseyModel } from '@/models/jersey.model'
import Image from 'next/image'
import React from 'react'
import styles from '../../styles/components/JerseyMiniCard.module.css'

const JerseyMiniCard = ({ jersey }: { jersey: JerseyModel }) => {
    return (
        <div className={styles.JerseyMiniCard}>
            <div className={styles['JerseyMiniCard-Img-Container']}>
                <Image src={jersey.img[0]} alt={jersey.name} height={800} width={800} />
            </div>
            <div className={styles['JerseyMiniCard-Content']}>
                {jersey.name.length > 24
                    ? `${jersey.name.slice(0, 24).trimEnd().toUpperCase()}...`
                    : jersey.name.toUpperCase()}
                <p>{jersey.sale}$</p>
            </div>
        </div>
    )
}

export { JerseyMiniCard }