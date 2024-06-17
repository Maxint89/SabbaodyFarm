import "./css/main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header"
import NotFound from "./components/NotFound"
import { ItemListContainer } from "./components/ItemListContainer"
import { Footer } from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from "./components/Carrito"
import { CartProvider } from "./context/CartContext"
import { Checkout } from "./components/Checkout";
import { CargarProductos } from "./components/CargarProductos";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/finalizarCompra" element={<Checkout/>} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/cargar-productos" element={<CargarProductos/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
