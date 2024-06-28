import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = {...item, cantidad};
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad++;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }

    const calcularCantidad = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const calcularTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const incrementarProducto = (producto) => {
        setCarrito(carrito.map(prod => {
            if (prod.id === producto.id) {
                return { ...prod, cantidad: prod.cantidad + 1 };
            }
            return prod;
        }));
    }

    const decrementarProducto = (producto) => {
        setCarrito(carrito.map(prod => {
            if (prod.id === producto.id && prod.cantidad > 1) {
                return { ...prod, cantidad: prod.cantidad - 1 };
            }
            return prod;
        }));
    }

    const eliminarProducto = (producto) => {
        const productoEncontrado = carrito.find(prod => prod.id === producto.id);
        const indice = carrito.indexOf(productoEncontrado);
        const nuevoCarrito = [...carrito];
        nuevoCarrito.splice(indice, 1);
        setCarrito(nuevoCarrito);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito]);

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, calcularCantidad, calcularTotal, incrementarProducto, decrementarProducto, vaciarCarrito, eliminarProducto }}>
            {children}
        </CartContext.Provider>
    )
}