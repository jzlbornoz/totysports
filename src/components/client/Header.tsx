'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { AppContext } from '@/context/AppContex'
import { Menu } from './Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../assets/logo.png'
import styles from '../../styles/components/Header.module.css'
import Alert from '../Alert'
import useAlert from '@/hooks/useAlert'

const Header = () => {
  const { appState, toggleMenu } = useContext(AppContext);
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const menuRef = useRef<HTMLDivElement>(null)

  const { alert, toggleAlert, setAlert } = useAlert({
    active: false,
    message: "",
    type: '',
    autoClose: true
  });

  useEffect(() => {
    if (!firstRender) {
      setAlert({
        active: true,
        message: "Carrito actualizado",
        type: 'fino',
        autoClose: true
      })
    } else {
      setFirstRender(false);
    }
  }, [appState.cart, setAlert])

  useEffect(() => {
    const handleClickMenu = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu();
      }
    }
    document.addEventListener('mousedown', handleClickMenu);

    return () => {
      document.removeEventListener('mousedown', handleClickMenu)
    }
  }, [toggleMenu])

  return (
    <>
      <header className={styles.Header}>
        {appState.menuIsOpen ? <div className='fixed' ref={menuRef}><Menu /></div> : null}
        <FontAwesomeIcon icon={faBars} onClick={() => toggleMenu()} />
        <Link href='/'>
          <Image src={Logo} alt='Logo' width={60} height={60} />
        </Link>
        <Link href='/cart'>
          <div className="font-sans lg:mt-0 lg:ml-6 align-middle text-white hover:text-gray-700 relative flex">
            <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>
            {appState.cart.length > 0
              && <span className="absolute z-50 right-0 top-0 rounded-full bg-original text-third 
            w-5 h-5 flex items-center justify-center p-0 m-0 text-sm  leading-tight text-center">
                {appState.cart.length}
              </span>}
          </div>
        </Link>
      </header>
      <Alert alert={alert} handleClose={toggleAlert} />
    </>

  )
}

export { Header }