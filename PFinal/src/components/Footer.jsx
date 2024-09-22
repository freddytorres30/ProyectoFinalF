import '../style/Home.css';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section footer-links">
        <h3>Enlaces</h3>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/SobreNosotros">Sobre Nosotros</a></li>
          <li><a href="/contacto">Contáctenos</a></li>
        </ul>
      </div>
      <div className="footer-section footer-contact">
        <h3>Contáctenos</h3>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
