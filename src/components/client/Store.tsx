'use client'

import { JerseyModel } from '@/models/jersey.model'
import React from 'react'

import styles from '../../styles/components/Store.module.css'
import { JerseyCard } from './JerseyCard'

import { motion } from 'framer-motion';
import Link from 'next/link'

const Store = ({ jerseys }: { jerseys: JerseyModel[] }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            }
        }
    }

    const itemMotion = {
        hidden: { opacity: 0, scale: 0 },
        show: { opacity: 1, scale: 1, },
    }
    return (
        <main className={styles.Store}>
            <h2>Oficial Jerseys</h2>
            <motion.section className={styles['Store-Wrapped']}
                variants={container}
                initial="hidden"
                animate="show"
            >
                {jerseys.map(item => (
                    <motion.div key={item.id}
                        variants={itemMotion}
                    >
                        <Link href={`/store/${item.id}`}>
                        <JerseyCard jersey={item} />
                        </Link>    
                    </motion.div>
                ))}
            </motion.section>
        </main>
    )
}

export { Store }