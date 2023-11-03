import { useEffect, useState } from 'react' ;
import { mfetch } from '../../helpers/mfetch';
import { useParams } from "react-router-dom" ;
import '../../components/ItemListContainer/ItemListContainer.css';



  function ItemListContainer({greeting = 'saludando'}) {
    const [product, setProducts] = useState([])
    const [loading, setLoading] = useState (true)
    const {cid} = useParams()

    useEffect(()=>{
      if (cid) {
        mfetch()
        .then(resultado => setProducts(resultado.filter(product => product.category === cid)))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))

      }else{
        mfetch()
        .then(resultado => setProducts(resultado))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
      }

    }, [cid] )

    
return(
  
        <div className='body'>
        {   loading ? <h2>Cargando...</h2> 
                :
                product.map(product => 
                    <div key={product.id} className="card w-25 flex" id='cards'>
                          <img src={product.imageUrl} className="card-img-top"/>
                    <div className="card-body">
            
                            <p>Nombre: {product.name}</p>
                            <p>Categoria: {product.category}</p>
                            <p>Precio: {product.price}</p>

                    </div>
                            <div className="card-footer">
                                <button className="btn btn-outline-dark w-100">Detalle</button>
                            </div>
                    </div>
        )}
        
            

  </div>
  
)
}






export default ItemListContainer