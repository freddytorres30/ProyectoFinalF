import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/NavBar";
import FormularioContacto from "../components/FormContacto";
import Mapa from "../components/ubicacion";
import Contact from "../components/Contacto";
import ContactUs from "../components/EmailForm";

function Contacto() {
    return(
        <div>
            <Navbar/>
            <Contact/>
            <Mapa/>
            <FormularioContacto/>
            <ContactUs/>
        </div>
    )
}
export default Contacto
