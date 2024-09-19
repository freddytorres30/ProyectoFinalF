import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/NavBar";
import Nosotros from "../components/SobreNosotros";
import FluidExample from "../components/ImagenPrincipal";

function About() {
    return(
        <div>
            <Navbar/>
            <Nosotros/>
            <FluidExample/>
        </div>
    )
}
export default About
