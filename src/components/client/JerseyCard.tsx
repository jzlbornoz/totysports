import { JerseyModel } from '@/models/jersey.model'
import Image from 'next/image'
import React from 'react'


import Logo from '../../assets/logo.png'
import style from '../../styles/components/JerseyCard.module.css'

const JerseyCard = ({ jersey }: { jersey: JerseyModel }) => {
    return (
        <div className={style.JerseyCard}>
            <section className={style["JerseyCard-ImageSection"]}>
                {
                    jersey.img
                        ? <Image src={jersey.img} alt="f" width={250} height={250} />
                        : <Image src={Logo} alt="e" width={250} height={250} />
                }
            </section>
            <section className={style["JerseyCard-ContentSection"]}>
                <p>  {jersey.name}</p>
                <p>{jersey.price}</p>
                <p>{jersey.arrive}</p>

            </section>
        </div>
    )
}

export { JerseyCard }