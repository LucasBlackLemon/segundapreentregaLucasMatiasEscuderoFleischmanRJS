import React from 'react'
import carrito from '../../assets/img/carrito.png';
import '../../components/CartWidget/CartWidget.css'; 
const CartWidget = () => {
    return (
    <div className='contenedorCarrito' >
        <img  className='carrito' src={carrito} />
    </div>
    )
}

export default CartWidget
