// src/Navbar.js
import React, { useState } from 'react';
import '../style/NavBar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">Panadería Riojalandia</div>
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <a href="/">Inicio</a>
        <a href="#services">Servicios</a>
        <a href="/Productos">Productos</a>
        <a href="/Contacto">Contacto</a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className="lineaNav"></div>
    </nav>
    
  );
};

export default Navbar;
