import React from 'react'
import { NavBar } from './NavBar'
import { Carrito } from './Carrito'
import logo from '../../assets/img/Logo-Sabbaody.png'

export const Header = () => {
  return (
    <header className='header'>
        <img src={logo} alt='Logo de Sabaoddy Farm' className='logo-farm' style={{ width: '150px', height: 'auto' }}/>
        <NavBar />
        <Carrito />
    </header>
  )
}
