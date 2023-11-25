import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCounter from './components/ItemCounter/ItemCounter';

import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from './Context/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer';

function App() {
    return ( 
            <CartContextProvider>
                    <Router>           
                        <NavBar />
                        <Routes>
                            <Route path='/' element={<ItemListContainer/> } /> 
                            <Route path='/category/:cid' element={<ItemListContainer/> } /> 
                            <Route path='/detail/:pid' element={<ItemDetailContainer/> } />
                            <Route path='/cart' element={<CartContainer/>}/>
                        

                            {/* <Route path='*' element={<Navigate to='/' />} />                   */}
                        </Routes>
                    </Router>
            </CartContextProvider>
)
}


export default App
