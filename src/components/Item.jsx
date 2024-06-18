import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

export const Item = ({ producto }) => {
    
    const {agregarAlCarrito} = useContext(CartContext);

    const handleAddToCart = () => {
        agregarAlCarrito(producto, 1);
    }
    
    return (
        <div className="producto">
            <img className='producto-image' src={producto.imagen} />
            <h2 className='producto-name'>{producto.nombre}</h2>
            <p className='producto-price'>${producto.precio}</p>
            <p className='producto-description'>{producto.descripcion}</p>
            <Link to={`/item/${producto.id}`} className="link-info" >+ Info</Link>
            <button onClick={() => handleAddToCart()} className='producto-detail-add'>Agregar al carrito</button>
        </div>
    )
}
