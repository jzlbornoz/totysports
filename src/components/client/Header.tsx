'use client'
import { AppContext } from '@/context/AppContex'
import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Menu } from '../Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';


import Logo from '../../assets/logo.png'
import styles from '../../styles/components/Header.module.css'

const Header = () => {
  const { appState, toggleMenu } = useContext(AppContext);

  return (
    <header className={styles.Header}>
      {appState.menuIsOpen ? <Menu /> : null}
      <FontAwesomeIcon icon={faBars} onClick={() => toggleMenu()} />
      <Link href='/'>
        <Image src={Logo} alt='Logo' width={60} height={60} />
      </Link>
      <Link href='/cart'>
        <div className={styles.HeaderCart}>
          {appState.cart.length > 0 ? <p>{appState.cart.length}</p> : null}
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </Link>
    </header>
  )
}

export { Header }