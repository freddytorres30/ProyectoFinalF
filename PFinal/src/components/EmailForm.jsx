import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style/Contacto.css'


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lqt4xls', 'template_jwgno5l', form.current, {
        publicKey: 'COhpRnJBuoSP0daMI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="container">
      <h1>Formulario de Contacto</h1>
      <p>Llena este formulario para ser contactado </p>
      <div className="borde">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label>Nombre completo:</label>
            <input type="text" name="user_name" />
          </div>
          <div className="form-group">
            <label>Número de Teléfono:</label>
            <input type="number" name="contact_number" />
          </div>
          <div className="form-group">
            <label>Correo Electrónico:</label>
            <input type="email" name="user_email" />
          </div>
          <div className="form-group">
            <label>Consulta:</label>
            <textarea name="message" />
            <input type="submit" value="Send" className='send' />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactUs