import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/NavBar";
import Mapa from "../components/ubicacion";
import Contact from "../components/Contacto";
import ContactUs from "../components/EmailForm";

function Contacto() {
    return(
        <div>
            <Navbar/>
            <Contact/>
            <Mapa/>          
            <ContactUs/>
        </div>
    )
}
export default Contacto
