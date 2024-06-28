import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import carritoicon from "../../../public/img/cart-icon.png"

export const CartWidget = () => {
  
  const { calcularCantidad } = useContext(CartContext); 
  
  return (
    <Link className='carrito' to='/Carrito'>
      <img src={carritoicon} /> {calcularCantidad()}
    </Link>
    
  )
}
