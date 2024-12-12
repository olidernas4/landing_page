import React from 'react';

const Testimonials = () => (
    <section id="testimonials" className="py-5 bg-light">
        <div className="container">
        <h3 className="text-center mb-4">Lo que dicen nuestros clientes</h3>
        <div className="row">
            <div className="col-md-4">
            <div className="card shadow-sm">
                <div className="card-body">
                <p className="card-text">"Excelente servicio, muy profesional y rápido. ¡Recomiendo completamente!"</p>
                <h5 className="card-title">Juan Pérez</h5>
                <p className="card-subtitle text-muted">Cliente satisfecho</p>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="card shadow-sm">
                <div className="card-body">
                <p className="card-text">"La atención al cliente es de primera. Resolvieron todas mis dudas rápidamente."</p>
                <h5 className="card-title">Ana Gómez</h5>
                <p className="card-subtitle text-muted">Cliente feliz</p>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="card shadow-sm">
                <div className="card-body">
                <p className="card-text">"Totalmente recomendado, el equipo está siempre dispuesto a ayudar y mejorar la experiencia."</p>
                <h5 className="card-title">Carlos Rodríguez</h5>
                <p className="card-subtitle text-muted">Cliente contento</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
);

export default Testimonials;
