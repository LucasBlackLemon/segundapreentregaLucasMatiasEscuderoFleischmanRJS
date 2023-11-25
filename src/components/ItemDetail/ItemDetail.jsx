import { Link } from "react-router-dom"
import ItemCounter from "../ItemCounter/ItemCounter"
import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"

export const ItemDetail = ({product}) => {
    const [isCount , setIsCount] = useState(true)
    
    
    const {addToCart} = useContext(CartContext)
    const onAdd = cant => {
        addToCart( { ...product, cant } )
        setIsCount(false)
        

    }
    
    return (
        <div className="row">
                    <div id='image' className="col-6 mt-5" >
                        <img src={product.imageUrl} alt="" className="img-fluid"/>
                    </div>
                <div className="col-4 text-center mt-5">
                        <p>Nombre: {product.name}</p>
                        <p>Categoria: {product.category}</p>
                        <p>Precio: ${product.price}</p>

                    <div>
                        {
                            isCount ?
                                <ItemCounter initial={1} stock={5} onAdd={onAdd}/>
                            :
                            <>
                            
                            <Link className="btn btn-outline-danger dos" to='/'>Volver al Inicio</Link>
                            <Link className="btn btn-outline-danger dos" to='/cart'>Ir al Carrito</Link>
                            </>
                                    
                        }
                    </div>   
                </div>    
        </div>
    )
}