import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

export const ItemListContainer = () => {

  let { categoryId } = useParams();
  let [productos, setProductos] = useState([]);
  let [titulo, setTitulo] = useState("Frutas del Diablo ");
  
  useEffect(() => {
    const prodRef = collection(db, "frutasdeldiablo");
    const qry = categoryId ? query(prodRef, where("categoria.id", "==", categoryId)) : prodRef;

    const catRef = collection(db, "categorias");
    let catQuery = categoryId && query(catRef, where("id", "==", categoryId));

    getDocs(qry)
      .then((res) => {
        setProductos(res.docs.map((doc) => {return {...doc.data(), id: doc.id}}));        
      })

    if (catQuery) {
        getDocs(catQuery)
          .then((res) => {
            setTitulo(res.docs[0].data().nombre);
          })
        } else {
        setTitulo("Frutas del Diablo");
        }
  }, [categoryId]);

  
  return (
    <div className="item-list-container">
      <h1 className="item-list-container-title">{titulo}</h1>
      <ItemList productos={productos} />
    </div>
  )
}