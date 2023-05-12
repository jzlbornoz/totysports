'use client'

import { JerseyModel } from '@/models/jersey.model'
import React from 'react'
import { JerseyCard } from './JerseyCard'

import { motion } from 'framer-motion';


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
        <section>
            <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 mt-[11vh] bg-white">
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Product Collection
                    </h2>

                    <p className="max-w-md mt-4 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                        natus?
                    </p>
                </header>

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
            </div>
        </section>

    )
}

export { Store }