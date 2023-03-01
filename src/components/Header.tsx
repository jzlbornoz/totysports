import Image from 'next/image'
import React from 'react'

import Logo from '../assets/logo.png'
import styles from '../styles/components/Header.module.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header className={styles.Header}>
        <Image src={Logo} alt='Logo' width={60} height={60}/>
        <FontAwesomeIcon icon={faBars} width={40} />
    </header>
  )
}

export  {Header}