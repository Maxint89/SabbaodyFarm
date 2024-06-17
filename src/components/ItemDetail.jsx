import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const ItemDetail = ( { producto } ) => {
    
    const { agregarAlCarrito } = useContext(CartContext);

    const handleAddToCart = () => {
        agregarAlCarrito(producto, 1);
    }
    
    return (
        <div className="producto-detail-cart">
            <div className='producto-detail-image'>
                <img src={producto.imagen} />
            </div>
            <div className='producto detail' >
                <h2 className='producto-detail-name'>{producto.nombre}</h2>
                <p className='producto-detail-price'>${producto.precio}</p>
                <p className='producto-detail-description'>{producto.descripcion}</p>
                <button onClick={() => handleAddToCart()} className='producto-detail-add'>Agregar al carrito</button>
            </div>
        </div>
    )
}
