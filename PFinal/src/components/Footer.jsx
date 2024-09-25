import '../style/Home.css';
import React from 'react';
import { FaFacebookF, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="src/img/logo.png" alt="Logo" width={250} />
      </div>
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
          <li>
            <a href="https://www.facebook.com/p/Panaderia-Riojalandia-100057884520256/?_rdr" target="_blank" rel="noopener noreferrer">
              <FaFacebookF /> Facebook
            </a>
          </li>
          <li>
            <a href="https://wa.me/50683045484" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
          </li>
          <li>
            <a href="tel:+50626640178"> {/* Cambia el número por el tuyo */}
              <FaPhone /> Llama
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
