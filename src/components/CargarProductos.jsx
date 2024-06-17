import React from 'react'
import data from "../data/productos.json";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export const CargarProductos = () => {
    
    const productosRef = collection(db, "frutasdeldiablo");
    
    data.forEach((prod) => {
        addDoc(productosRef, prod);
    })

    return (
        <div>Cargar productos</div>
    )
}
