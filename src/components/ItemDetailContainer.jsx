import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../data/productos.json";

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);

    useEffect(() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId])


    return (
        <div>{
            producto ?
                <div className="producto">
                    <img src={producto.imagen} />
                    <h2>{producto.nombre}</h2>
                    <p>${producto.precio}</p>
                    <p>{producto.descripcion}</p>
                </div>
                : "Cargando... Favor de esperar"}</div>
    )
}

export default ItemDetailContainer