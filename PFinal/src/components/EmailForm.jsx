import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../style/Contacto.css';

export const ContactUs = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lqt4xls', 'template_jwgno5l', form.current, {
        publicKey: 'COhpRnJBuoSP0daMI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
          }, 1500);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
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
            <input type="text" name="user_name" required />
          </div>
          <div className="form-group">
            <label>Número de Teléfono:</label>
            <input type="number" name="contact_number" required />
          </div>
          <div className="form-group">
            <label>Correo Electrónico:</label>
            <input type="email" name="user_email" required />
          </div>
          <div className="form-group">
            <label>Consulta:</label>
            <textarea name="message" required />
          </div>
          <input type="submit" value="Enviar" className='send' />
        </form>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Enviado con éxito</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
