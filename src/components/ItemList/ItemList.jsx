import { Link } from "react-router-dom"
import { Filter } from "./Filter"

const productFiltered = ({product, filterState, handleFilterChange}) => (
    <>


        {
            filterState === '' ? 
                
                    product.map(product=> <div  className="card w-25">
                                                <img src={product.imageUrl} className="card-img-top"/>
                                                <div className="card-body">
                                                    <p>Nombre: {product.name}</p>
                                                    <p>Category: {product.category}</p>
                                                    <p>Precio: {product.price}</p>
                                                </div>
                                                <div className="card-footer">
                                                    <Link to={`/detail/${product.id}`}>
                                                    <button className="btn btn-outline-dark w-100">Detalle</button>
                                                    </Link>
                                                    
                                                </div>
                                            </div>
                    )
                
                :
                
                    product
                        .filter(prod => prod.name.toLowerCase().includes(filterState.toLowerCase()))
                        .map(product => <div className="card w-25">
                                            <img src={product.imageUrl} className="card-img-top"/>
                                            <div className="card-body">
                                                <p>Nombre: {product.name}</p>
                                                <p>Category: {product.category}</p>
                                                <p>Precio: {product.price}</p>
                                            </div>
                                            <div className="card-footer">
                                                
                                            <Link to={`/detail/${product.id}`}>
                                                    <button className="btn btn-outline-dark w-100">Detalle</button>
                                                    </Link>

                                            </div>
                                        </div>
                    )
                

        }
    </>
)

export const ItemList = ({product}) => {
    return (
    <Filter product= {product}>
        { productFiltered }
    </Filter>
    )
}  