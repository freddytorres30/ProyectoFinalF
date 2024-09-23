import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/NavBar";
import CarruselPrin from '../components/CarruselPrin'
import Main from "../components/MainContent";
import Destac from "../components/Destacados";
import Footer from "../components/Footer";

function Home() {
    return(
        <div>          
            <Navbar/>
            <CarruselPrin/>
            <br />
            <h1 className="dest">Productos Destacados</h1>
            <Destac/>
            <br /><br /><br /><br /><br /><br />
            <Main/>
            <Footer/>
        </div>
    )
}
export default Home
