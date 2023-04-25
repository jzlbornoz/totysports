'use client'
import React, { useContext, useState } from 'react'
import Link from 'next/link';
import { AppContext } from '@/context/AppContex';
import { JerseyModel } from '@/models/jersey.model'

import { motion } from "framer-motion"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import style from "../../styles/components/ProductPage.module.css";
import ZoomableImage from './ZoomeableImg';


const ProductPage = ({ product }: { product: JerseyModel }) => {

    const { addToCart } = useContext(AppContext);
    const [productToAdd, setProductToAdd] = useState(product);

    // Framer Motion
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


    // select events
    const [selectedOption, setSelectedOption] = useState<string>(product.size[0]);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
        setProductToAdd({
            ...productToAdd,
            size: [selectedOption]
        })
    };

    return (
        <section className={style.ProductPage}>
            <div className={style['ProductPage-ImgDiv']}>
                <ZoomableImage src={product.img[0]} />
            </div>
            <section className={style['ProductPage-Content']}>
                <h2>{product.name}</h2>
                <div className={style['ProductPage-Content-Info']}>
                    <ul>
                        <li>
                            <span>Tallas:</span>
                            <select value={selectedOption} onChange={handleSelectChange}>
                                {product.size.map(char => (
                                    <option key={char}>{char}</option>
                                ))}
                            </select>
                        </li>
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
                        onClick={() => addToCart(productToAdd)}
                    >
                        Agregar al carrito
                        <FontAwesomeIcon icon={faCartShopping} style={{ marginLeft: "5px", width: "26px" }} />
                    </motion.button>
                </section>

            </section>
            {product.img.map(item => (
                <div key={item + Math.random().toString()}>
                    {
                        product.img[0] == item
                            ? null
                            : <div className={style['ProductPage-ImgDiv']}>
                                <ZoomableImage src={item} />
                            </div>
                    }
                </div>
            ))}
        </section>
    )
}

export { ProductPage }