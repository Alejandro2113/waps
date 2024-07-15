//CARRO DE COMPRAS
import cart from '../../assets/purple-shopping-cart.svg'
import './CartWidget.css'

function CartWidget() {
  return (
    <div>
      <img src={cart} alt="Compras" className='logoCart'/>
    </div>
  )
}

export default CartWidget
