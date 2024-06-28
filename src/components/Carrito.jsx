import React, { Fragment, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, calcularTotal, incrementarProducto, decrementarProducto, vaciarCarrito, eliminarProducto } = useContext(CartContext);

    return (
        <div className='carritoCard'>
            <h1 className='item-list-container-title'>Carrito de compras</h1>
            {carrito.map((prod) => <div className='itemCard' key={prod.id}>
                <h3 className='carritoTitle'>{prod.nombre}</h3>
                <p className='carritoPrecioU'> Precio unitario: ${prod.precio}</p>
                <button className='botonCarrito' onClick={() => decrementarProducto(prod)}>➖</button>
                <p className='carritoCantidad'> Cantidad: {prod.cantidad}</p>
                <button className='botonCarrito' onClick={() => incrementarProducto(prod)}>➕</button>
                <p className='carritoPrecioT'>Precio total: ${prod.precio*prod.cantidad}</p>
                <button className='botonCarrito' onClick={() => eliminarProducto(prod)}>❌</button>
            </div>)}
            {
                carrito.length > 0 ?
                    <div className='carritoTotal'>
                        <h2 className='carritoTotalTitle'>Total a pagar: ${calcularTotal()}</h2>
                        <button className='carritoTotalVaciar' onClick={vaciarCarrito}>Vaciar carrito</button>
                        <Link to="/finalizarCompra" className='botonfinalizar'  >Finalizar compra</Link>
                    </div> :
                    <h2 className='carritoEstado'>Carrito vacío 🗑️</h2>
            }
        </div>
    )
}

export default Carrito