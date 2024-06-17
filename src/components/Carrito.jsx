import React, { Fragment, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, calcularTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);

    return (
        <div className='carritoCard'>
            <h1 className='item-list-container-title'>Carrito de compras</h1>
            {carrito.map((prod) => <Fragment key={prod.id}>
                <h3 className='carritoTitle'>{prod.nombre}</h3>
                <p className='carritoPrecioU'> Precio unitario: ${prod.precio}</p>
                <p className='carritoCantidad'> Cantidad: {prod.cantidad}</p>
                <p className='carritoPrecioT'>Precio total: {prod.precio*prod.cantidad}</p>
                <button className='botonEliminar' onClick={() => eliminarProducto(prod)}>❌</button>
            </Fragment>)}
            {
                carrito.length > 0 ?
                    <div className='carritoTotal'>
                        <h2 className='carritoTotalTitle'>Total a pagar: ${calcularTotal()}</h2>
                        <button className='carritoTotalVaciar' onClick={vaciarCarrito}>Vaciar carrito</button>
                        <Link to="/finalizarCompra" >Finalizar compra</Link>
                    </div> :
                    <h2 className='carritoEstado'>Carrito vacío :/</h2>
            }
        </div>
    )
}

export default Carrito