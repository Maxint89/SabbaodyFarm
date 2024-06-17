import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);
    let[loading, setLoading] = useState(true);

    useEffect(() => {
        const docRef = doc(db, "frutasdeldiablo", itemId);
        getDoc(docRef)
            .then(res => {
                if(res.data()){
                    setProducto({...res.data(), id: res.id});
                }
                setLoading(false);
            })
    }, [itemId]);

    if (loading){
        return <div className='producto-ppal' >Cargando producto...</div>
    }else if(producto) {
        return (
            <div className='producto-ppal'>
                <ItemDetail producto={producto} />
            </div>
        )}else{
            return <div className='producto-ppal' >Producto no encontrado</div>
        }    
        
}

export default ItemDetailContainer