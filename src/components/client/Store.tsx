'use client'

import { JerseyModel } from '@/models/jersey.model'
import React from 'react'
import { JerseyCard } from './JerseyCard'

import { motion } from 'framer-motion';


const Store = ({ jerseys }: { jerseys: JerseyModel[] }) => {



    //framer motion
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

        <motion.ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4"
            variants={container}
            initial="hidden"
            animate="show">
            {jerseys.map(item => (
                <motion.li key={item.id}
                    variants={itemMotion}
                >
                    <JerseyCard jersey={item} />
                </motion.li>
            ))}
        </motion.ul>

    )
}

export { Store }