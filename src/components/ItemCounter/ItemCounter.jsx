import { useCounter } from "../../hooks/useCounter"
import '../../components/ItemCounter/ItemCounter.css'


export const ItemCounter = ({initial=1, stock=10, onAdd}) => {
    const {count, handleResta, handleSuma} = useCounter(initial, stock)    

    const handleOnAdd = ()=>{
            onAdd(count)
        }


    return (
        <div className="text-center">
            <div>
                <p>{count}</p>
            </div>
            <div>
                <button className="btn btn-outline-danger" onClick={handleResta}> - </button>
                <button className="btn btn-outline-danger" onClick={handleSuma}> + </button>
                <button className="btn btn-outline-danger" onClick={handleOnAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCounter
