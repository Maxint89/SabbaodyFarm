import "./css/main.css"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header"
import NotFound from "./components/NotFound"
import { ItemListContainer } from "./components/ItemListContainer"
import {Footer} from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {

  const [numerito, setNumerito] = useState(1);

  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Header numerito={numerito} setNumerito={setNumerito} />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
=======
    <>
      <Header />
      <ItemListContainer greeting={'Proximamente nuestros productos...'}/>
    </>
>>>>>>> 00c07c2666f34308d3b66d17539dcd5eb3f6b0b1
  )
}

export default App
