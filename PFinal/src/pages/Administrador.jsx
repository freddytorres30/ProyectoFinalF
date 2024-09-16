import React from "react";
import Navbar from "../components/NavBar";
import '../style/Admin.css'
import TablaInventario from "../components/Inventario";
import ProductSidebar from "../components/AsideInventario";

function Inventario() {
    return (
        <div className="containerInv">
            <Navbar />
            <div>

                <div className="linea2"></div>
                <div className="sobreN"><h1>PRODUCTOS</h1></div>
                <div className="linea"></div>

                <div className="main-content">
                    <ProductSidebar />
                    <TablaInventario />
                </div>
            </div>
        </div>
    )
}

export default Inventario;
