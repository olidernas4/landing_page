import React from 'react';

const ContactForm = () => (
  <section id="contact" className="py-5 bg-light">
    <div className="container">
      <h3 className="text-center mb-4">Contáctanos</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="Tu correo electrónico" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Tu mensaje"></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Enviar</button>
      </form>
    </div>
  </section>
);

export default ContactForm;
