import React from "react";
import Navbar from "../components/NavBar";
import Crear from "../components/CrearProducto";
import TablaInventario from "../components/Inventario";

function Inventario() {
    return (
        <div>
            <Navbar />
            <div className="contacoCont">
                <div className="linea2"></div>
                <div className="sobreN"><h1>PRODUCTOS</h1></div>
                <div className="linea"></div>
            </div>
            <br />
            <div>
                <Crear/>
            </div>
            <br />
            <div>
                <TablaInventario/>
            </div>
            
        </div>
    )
}
export default Inventario

