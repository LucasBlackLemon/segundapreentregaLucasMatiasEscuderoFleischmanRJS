import { useContext } from "react"
import { CartContext, useCartContext } from "../../Context/CartContext"
import '../../components/CartContainer/CartContainer.css'
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from 'firebase/firestore'

export const CartContainer = () => {
    const {cartList, clearCart, totalPrice, removeFromCart,} = useCartContext()

    const handleOrders = () => {
        const order = {}
        order.buyer = {name: 'Lucas', phone: '112225555', email: 'poketienda@gmail.com'}
        order.items = cartList.map(( { id, price, cant, name } ) => ( { id: id, price: price, name: name, cant: cant} ) )
        order.total = totalPrice()  
        

        const db = getFirestore()
        
        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
        .then(({ id }) => console.log(id))
        .catch(err => console.log(err))


        console.log('Enviando order: ', order)
        console.log(cartList)
    }

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        };

    return(
    <div className="w-100 body bodyCartDetail ">
        
        {cartList.map(product=> 
        <div key={product.id} className="cartDetail"> 
            <img src={product.imageUrl} alt="image" className="imgCart" />
                    
                    Producto: {product.name}
                    <br />  
                    Precio: ${product.price} 
                    <br />
                    Cantidad Seleccionada: {product.cant}
                    
            <button onClick={() => handleRemoveFromCart(product.id)} className="btn btn-danger btnX">X</button>
        </div>)
        }
        <p className="precioFinal">
        Precio total: ${totalPrice()}
        </p>
        <br />
        <button className="btn btn-danger btnCart" onClick={clearCart}>Vaciar Carrito</button>
        <br />
        <button onClick={handleOrders} className="btn btn-success btnCart ">Finalizar Compra</button>


    </div>
    )

}