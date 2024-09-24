import React from "react";
import GridExample from "../components/productos";
import Navbar from "../components/NavBar";
import FilterSidebar from "../components/AsideProductos";
import Footer from "../components/Footer";

function Products() {
    return (
        <div>
            <Navbar />
            <div className="contacoCont">
                <div className="linea2"></div>
                <div className="sobreN"><h1>PRODUCTOS</h1></div>
                <div className="linea"></div>
            </div>
            <br />
            <div className="main-content">
                <GridExample />
            </div>
            <Footer/>
        </div>
    )
}
export default Products

