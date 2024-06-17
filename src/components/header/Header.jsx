import React from 'react'
import { NavBar } from './NavBar'
import { CartWidget } from './CartWidget'
import logo from '../../../public/img/Logo-Sabbaody.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
        <Link to="/"><img src={logo} alt='Logo de Sabaoddy Farm' className='logo-farm' style={{ width: '150px', height: 'auto' }}/></Link>
        <NavBar />
        <CartWidget />
    </header>
  )
}
