'use client'
import { JerseyModel } from '@/models/jersey.model'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

import style from "../../styles/components/ProductPage.module.css";


import { motion } from "framer-motion"


const ProductPage = ({ product }: { product: JerseyModel }) => {

    const item = {
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        },
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.7
            }
        },
        tap: {
            scale: 1.128,
            transition: {
                type: "spring", stiffness: 400, damping: 17,
            },

            color: "#FFFFFF",
            backgroundColor: '#468220'
        },
    }

    return (
        <section className={style.ProductPage}>
            <div className={style['ProductPage-ImgDiv']}>
                <Image src={product.img[0]} alt={product.name} width={1200} height={1200} />
            </div>
            <section className={style['ProductPage-Content']}>
                <h2>{product.name}</h2>
                <div className={style['ProductPage-Content-Info']}>
                    <ul>
                        <li><span>Tallas:</span><p>{product.size.join(', ')}</p></li>
                        <li>
                            {product.stock > 0 ? <><span>Stock:</span><p>{product.stock}</p></>
                                : <><span>Disponibilidad:</span><p>Encargala ya!</p></>}

                        </li>
                        <li><span>Temporada:</span><p>{product.season}</p></li>
                        <li><span>Tecnología:</span>
                            <p className={style['ProductPage-Content-Info-p']}>
                                {product.technology}
                            </p>
                        </li>
                        {product.players ? <li><span>Dorsal:</span><p>{product.players.join(', ')}</p></li> : null}
                        <li>
                            <span>Precio:</span>
                            <p>{product.price}$</p>
                            {product.sale > 0
                                ? <> <span>Oferta:</span>
                                    <p className={style['ProductPage-Content-Info-p']}>
                                        {product.sale}$
                                    </p> </>
                                : <> </>}
                        </li>

                    </ul>
                </div>
                <section className={style.ProductPageCTO}>
                    <Link href={product.link}>
                        <p>Ver Jersey</p>
                        <button>{product.brand}</button>
                    </Link>

                    <motion.button type='button'
                        initial='show'
                        whileHover='hover'
                        whileTap='tap'
                        variants={item}
                        className={style['ProductPageCTO-Buy']}
                    >
                        Agregar al Carrito
                    </motion.button>
                </section>

            </section>
            {product.img.map(item => (
                <div key={item + Math.random().toString()}>
                    {
                        product.img[0] == item
                            ? null
                            : <div className={style['ProductPage-ImgDiv']}>
                                <Image src={item} alt={product.name} width={1200} height={1200} />
                            </div>
                    }
                </div>
            ))}
        </section>
    )
}

export { ProductPage }