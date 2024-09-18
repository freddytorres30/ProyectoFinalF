import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/NavBar";
import CarruselPrin from '../components/CarruselPrin'
import Main from "../components/MainContent";

function Home() {
    return(
        <div>
            
            <Navbar/>
            <CarruselPrin/>
            <Main/>
        </div>
    )
}
export default Home
