import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { mfetch } from "../../helpers/mfetch"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import '../../components/ItemDetailContainer/ItemDetalContainer.css'
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Loading } from "../ItemListContainer/ItemListContainer"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore"


export const ItemDetailContainer = () => {
    const [loading, setLoading] = useState (true)
    const { pid } = useParams()
    const [ product, setProduct ] = useState({})

    // useEffect(()=>{
    //     mfetch(pid) 
    //     .then(resultado => setProduct(resultado))
    //     .catch(error => console.log(error))
    //     .finally(()=> setLoading(false))
    // }, [pid] )


    useEffect(()=>{
        const dbFirestore = getFirestore()
        const queryDoc    = doc(dbFirestore, 'products', pid) 
        getDoc(queryDoc)
        .then(res => setProduct( { id: res.id , ...res.data() } ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    },[])


    return (
        <div className="body">
            {
                loading ? <Loading/>
                :
                <ItemDetail product={product} />
            }
        </div>
    )
}


export default ItemDetailContainer



