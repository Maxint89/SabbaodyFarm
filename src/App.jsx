import { ItemListContainer } from "./components/ItemListContainer"
import { Header } from "./components/header/Header"
import "./css/main.css"

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greeting={'Proximamente nuestros productos...'}/>
    </>
  )
}

export default App
