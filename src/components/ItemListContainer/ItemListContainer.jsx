import { useEffect, useState } from 'react' ;
import { Link, useParams } from "react-router-dom" ;
import '../../components/ItemListContainer/ItemListContainer.css';
import Spinner from 'react-bootstrap/Spinner';
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'

export const Loading = () => {
  return <h2>  <Spinner animation="border" variant="danger" /> Cargando</h2>
}

  function ItemListContainer({greeting = 'saludando'}) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState (true)
    const {cid} = useParams()

  useEffect(()=>{
    const dbFirestore     = getFirestore()
    const queryCollection = collection(dbFirestore, 'products') 
    
    if (cid) {

        const queryFilter     = query(queryCollection, where('category', '==', cid))
            
        
        getDocs(queryFilter)
        .then(res =>{ setProducts( res.docs.map(product => ({ id: product.id , ...product.data() }) ) )})
        .catch(err => console.log(err)) 
        .finally(() => setLoading(false))
        
    }else{ 
                    
        getDocs(queryCollection)
        .then(res => setProducts( res.docs.map(product => ({ id: product.id , ...product.data() }) ) ))
        .catch(err => console.log(err)) 
        .finally(() => setLoading(false))
    }
}, [cid])



    
return(

        <div className='body'>
          
        {   loading ? 
                  <Loading/>
                :
                  products.map(product => 
                    <div key={product.id} className="card w-25 flex" id='cards'>
                          <img src={product.imageUrl} className="card-img-top"/>
                    <div className="card-body">
            
                            <p>Nombre: {product.name}</p>
                            <p>Categoria: {product.category}</p>
                            <p>Precio: ${product.price}</p>

                    </div>
                            <div className="card-footer">
                            <Link to={`/detail/${product.id}`}>
                                    <button  className="btn btn-outline-danger w-100">Detalle</button>
                            </Link>
                            
                            </div>
                    </div>,
            
        )}
        

  </div>
  
)
}


export default ItemListContainer