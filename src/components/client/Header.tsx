'use client'
import Image from 'next/image'
import React, { useContext } from 'react'

import Logo from '../../assets/logo.png'
import styles from '../../styles/components/Header.module.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../Menu';
import { AppContext } from '@/context/AppContex'



const Header = () => {
  const { appState, toggleMenu } = useContext(AppContext);

  return (
    <header className={styles.Header}>
      {appState.menuIsOpen ? <Menu /> : null}
      <FontAwesomeIcon icon={faBars} onClick={() => toggleMenu()} />
      <Image src={Logo} alt='Logo' width={60} height={60} />
    </header>
  )
}

export { Header }