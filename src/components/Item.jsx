import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ producto }) => {
    return (
        <div className="producto">
            <img className='producto-image' src={producto.imagen} />
            <h2 className='producto-name'>{producto.nombre}</h2>
            <p className='producto-price'>${producto.precio}</p>
            <p className='producto-description'>{producto.descripcion}</p>
            <Link to={`/item/${producto.id}`}>+ Info</Link>
        </div>
    )
}
