import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DiscountButtons = () => {
  const [show, setShow] = useState(false);
  const [modalInfo, setModalInfo] = useState('');

  const handleShow = (info) => {
    setModalInfo(info);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <section className="py-5 text-center">
      <div className="container">
        <h3 className="mb-4">Promociones Exclusivas</h3>
        <button 
          className="btn btn-success mx-2" 
          onClick={() => handleShow('Descuento del 20% en zapatos. ¡Aprovecha esta oferta exclusiva para renovar tu calzado!')}
        >
          Descuento 20%
        </button>
        <button 
          className="btn btn-warning mx-2" 
          onClick={() => handleShow('Descuento del 50% en camisas. ¡No te pierdas esta oportunidad de actualizar tu guardarropa!')}
        >
          Descuento 50%
        </button>
        <button 
          className="btn btn-danger mx-2" 
          onClick={() => handleShow('¡Última oportunidad! Descuentos especiales en varios artículos. ¡Compra ahora antes de que se agoten!')}
        >
          ¡Última Oportunidad!
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Detalles del Descuento</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalInfo}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
};

export default DiscountButtons;