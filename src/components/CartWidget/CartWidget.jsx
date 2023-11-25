
import { useCartContext } from '../../Context/CartContext';
import carrito from '../../assets/img/carrito.png';
import '../../components/CartWidget/CartWidget.css';

const CartWidget = () => {
    const {totalCant} = useCartContext()

    return (
    <div className='contenedorCarrito' >
        <span className='totalCant'>{totalCant()}</span>
        <img  className='carrito' src={carrito} />

    </div>

    )

}

export default CartWidget
