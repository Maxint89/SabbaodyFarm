import cart from '../../assets/img/cart-icon.png'


export const Carrito = (props) => {
  return (
    <div className="carrito">
        <img src={cart} alt="Icono carrito de compras" />{props.numerito}
    </div>
  )
}
