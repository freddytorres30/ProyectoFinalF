import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Registro';
import Contacto from '../pages/Contacto';
import Products from '../pages/Productos';
import Inventario from '../pages/Administrador';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element ={<Home/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Registro' element={<Register/>}/>
                <Route path='/Contacto' element={<Contacto/>}/>
                <Route path='/Productos' element={<Products/>}/>
                <Route path='/Admin' element={<Inventario/>}/>
            </Routes>
        </Router>
    );
};
export default Routing;