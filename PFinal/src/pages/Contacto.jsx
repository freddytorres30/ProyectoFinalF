import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/NavBar";
import FormularioContacto from "../components/FormContacto";
import Mapa from "../components/ubicacion";
import Contact from "../components/Contacto";

function Contacto() {
    return(
        <div>
            <Navbar/>
            <Contact/>
            <Mapa/>
            <FormularioContacto/>
        </div>
    )
}
export default Contacto
