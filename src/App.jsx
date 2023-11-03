import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
const [count, setCount] = useState(0)

    return ( 

    <Router>           
        <NavBar />
        <Routes>
            <Route path='/' element={<ItemListContainer greeting='saludo desde app, bienvenidos' /> } /> 
            <Route path='/category/:cid' element={<ItemListContainer greeting='saludo desde app, bienvenidos' /> } /> 
            <Route path='/detail/:pid' element={<ItemDetailContainer /> } />
            

            <Route path='*' element={<Navigate to='/' />} />                  
        </Routes>
    </Router>
)
}


export default App
