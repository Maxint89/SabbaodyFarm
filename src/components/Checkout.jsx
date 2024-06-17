import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";



export const Checkout = () => {
    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit, formState: {errors} } = useForm();
    let [docId, setDocId] = useState("");
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal ()
        }

        const pedidosRef = collection (db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setDocId(doc.id);
                vaciarCarrito();
            })
    }

    if (docId) {
        return (
            <>
                <h1>Muchas gracias por su compra</h1>
                <h3>Su codigo de seguimiento es: {docId} </h3>    
            </>
        )
    }

    return (
        <form onSubmit={handleSubmit(comprar)}>
            <input {...register('nombre', { required: true })} placeholder="Nombre completo" />
            {errors.nombre && <p>El nombre es obligatorio.</p>}            
            <input {...register('email', { required: true })} placeholder="Email" />
            {errors.email && <p>El email es obligatorio.</p>}            
            <input {...register('direccion', { required: true })} placeholder="Dirección" />
            {errors.direccion && <p>La dirección es obligatoria.</p>}            
            <input {...register('ciudad', { required: true })} placeholder="Ciudad" />
            {errors.ciudad && <p>La ciudad es obligatoria.</p>}            
            <input {...register('telefono', { required: true })} placeholder="Número de teléfono" />
            {errors.telefono && <p>El número de teléfono es obligatorio.</p>}            
            <input {...register('codigoPostal', { required: true })} placeholder="Código Postal" />
            {errors.codigoPostal && <p>El código postal es obligatorio.</p>}
            <button type="submit">Comprar</button>
        </form>
    )
}