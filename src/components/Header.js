import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#hero">Quest</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a 
                                href="#hero" 
                                className="nav-link text-white"
                                style={{ transition: 'color 0.3s ease, box-shadow 0.3s ease' }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = '#17a2b8';
                                    e.target.style.boxShadow = '0px 4px 8px rgba(23, 162, 184, 0.5)';
                                    e.target.style.borderRadius = '10px';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'white';
                                    e.target.style.boxShadow = 'none';
                                    e.target.style.borderRadius = '0';
                                }}
                            >
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                href="#products" 
                                className="nav-link text-white"
                                style={{ transition: 'color 0.3s ease, box-shadow 0.3s ease' }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = '#17a2b8';
                                    e.target.style.boxShadow = '0px 4px 8px rgba(23, 162, 184, 0.5)';
                                    e.target.style.borderRadius = '10px';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'white';
                                    e.target.style.boxShadow = 'none';
                                    e.target.style.borderRadius = '0';
                                }}
                            >
                                Productos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                href="#contact" 
                                className="nav-link text-white"
                                style={{ transition: 'color 0.3s ease, box-shadow 0.3s ease' }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = '#17a2b8';
                                    e.target.style.boxShadow = '0px 4px 8px rgba(23, 162, 184, 0.5)';
                                    e.target.style.borderRadius = '10px';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'white';
                                    e.target.style.boxShadow = 'none';
                                    e.target.style.borderRadius = '0';
                                }}
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;
