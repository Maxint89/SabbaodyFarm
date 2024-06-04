import React from 'react'

export const ItemDetail = ({producto}) => {
    return (
        <div className="producto-detail">
            <img className='producto-detail-image' src={producto.imagen} />
            <h2 className='producto-detail-name'>{producto.nombre}</h2>
            <p className='producto-detail-price'>${producto.precio}</p>
            <p className='producto-detail-description'>{producto.descripcion}</p>
        </div>
    )
}
