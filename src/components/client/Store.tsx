import { JerseyModel } from '@/models/jersey.model'
import React from 'react'

import styles from '../../styles/components/Store.module.css'
import { JerseyCard } from './JerseyCard'

const Store = ({ jerseys }: { jerseys: JerseyModel[] }) => {
    return (
        <main className={styles.Store}>
            <h2>Oficial Jerseys</h2>
            <section className={styles['Store-Wrapped']}>
                {jerseys.map(item => (
                    <div key={item.id}>
                        <JerseyCard jersey={item}/>
                    </div>
                ))}
            </section>
        </main>
    )
}

export { Store }