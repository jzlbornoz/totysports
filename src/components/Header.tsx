import Image from 'next/image'
import React from 'react'

import Logo from '../assets/logo.png'
import styles from '../styles/components/Header.module.css'

const Header = () => {
  return (
    <header className={styles.Header}>
        <Image src={Logo} alt='Logo' width={60} height={60}/>
        <p>menu</p>
    </header>
  )
}

export  {Header}