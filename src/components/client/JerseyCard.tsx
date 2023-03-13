'use client'
import Image from 'next/image'
import React from 'react'

import { JerseyModel } from '@/models/jersey.model'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../assets/logo.png'
import style from '../../styles/components/JerseyCard.module.css'

const JerseyCard = ({ jersey }: { jersey: JerseyModel }) => {
    return (
        <div className={style.JerseyCard}>
            <section className={style["JerseyCard-ImageSection"]}>
                {
                    jersey.img
                        ? <Image src={jersey.img[0]} alt="f" width={250} height={250} />
                        : <Image src={Logo} alt="e" width={1200} height={1200} />
                }
            </section>
            <section className={style["JerseyCard-ContentSection"]}>
                <p>{jersey.name.toUpperCase()}</p>
                <div>
                    <p>{jersey.price}$</p>
                    <p>{jersey.arrive ? <FontAwesomeIcon icon={faPlaneCircleCheck} /> : <FontAwesomeIcon icon={faPlane} />}</p>
                </div>
            </section>
            <div className={style["JerseyCard-SaleTag"]}>
                <p>{jersey.sale}$</p>
            </div>
        </div>
    )
}

export { JerseyCard }