import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/NavBar";
import Contact from "../components/Contacto";
import FluidExample from "../components/ImagenPrincipal";
import FormularioContacto from "../components/FormContacto";

function Contacto() {
    return(
        <div>
            
            <Navbar/>
            <Contact/>
            <FluidExample/>
            
            <FormularioContacto/>
        </div>
    )
}
export default Contacto
