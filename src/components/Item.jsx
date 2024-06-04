import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ producto }) => {
    return (
        <div className="producto">
            <img className='producto-detail-image' src={producto.imagen} />
            <h2 className='producto-detail-name'>{producto.nombre}</h2>
            <p className='producto-detail-price'>${producto.precio}</p>
            <p className='producto-detail-description'>{producto.descripcion}</p>
            <Link to={`/item/${producto.id}`}>+ Info</Link>
        </div>
    )
}
