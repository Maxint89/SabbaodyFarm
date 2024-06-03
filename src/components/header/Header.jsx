import React from 'react'
import { NavBar } from './NavBar'
import { Carrito } from './Carrito'
import logo from '../../assets/img/Logo-Sabbaody.png'
import { Link } from 'react-router-dom'

export const Header = (props) => {
  return (
    <header className='header'>
        <Link to="/"><img src={logo} alt='Logo de Sabaoddy Farm' className='logo-farm' style={{ width: '150px', height: 'auto' }}/></Link>
        <NavBar />
        <Carrito numerito={props.numerito} />
    </header>
  )
}
