import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/NavBar";
import Nosotros from "../components/SobreNosotros";
import Footer from "../components/Footer";

function About() {
    return(
        <div>
            <Navbar/>
            <Nosotros/>
            
            <Footer/>
        </div>
    )
}
export default About
