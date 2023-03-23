import { JerseyModel } from '@/models/jersey.model'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

import style from "../../styles/components/ProductPage.module.css";

const ProductPage = ({ product }: { product: JerseyModel }) => {
    return (
        <section className={style.ProductPage}>
            <div className={style['ProductPage-ImgDiv']}>
                <Image src={product.img[0]} alt={product.name} width={1200} height={1200} />
            </div>
            <section className={style['ProductPage-Content']}>
                <h2>{product.name}</h2>
                <div className={style['ProductPage-Content-Info']}>
                    <ul>
                        <li><span>Tallas:</span><p>{product.size.toString()}</p></li>
                        <li><span>Stock:</span><p>{product.stock}</p></li>
                        <li><span>Temporada:</span><p>{product.season}</p></li>
                        <li><span>Technology:</span>
                            <p className={style['ProductPage-Content-Info-p']}>
                                {product.technology}
                            </p></li>

                    </ul>
                    <ul>
                        {product.players ? <li><span>Dorsal:</span><p>{product.players.toString()}</p></li> : null}
                        <li><span>Precio:</span><p>{product.price}$</p></li>
                        <li><span>Oferta:</span>
                            <p className={style['ProductPage-Content-Info-p']}>
                                {product.sale}$
                            </p></li>
                    </ul>
                </div>
                <section>
                    <p>Ver Jersey</p>
                    <Link href={product.link}>
                        <button>{product.brand}</button>
                    </Link>
                </section>
                <button className={style['ProductPage-Content-Buy']}>Agregar al Carrito</button>
            </section>
            <div className={style['ProductPage-ImgDiv']}>
                <Image src={product.img[1]} alt={product.name} width={1200} height={1200} />
            </div>
            <div className={style['ProductPage-ImgDiv']}>
                <Image src={product.img[2]} alt={product.name} width={1200} height={1200} />
            </div>
            <div className={style['ProductPage-ImgDiv']}>
                <Image src={product.img[3]} alt={product.name} width={1200} height={1200} />
            </div>
        </section>
    )
}

export { ProductPage }