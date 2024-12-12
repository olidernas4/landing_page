import React from 'react';
import productImage1 from '../image/product1.jpg';
import productImage2 from '../image/product2.jpg';
import productImage3 from '../image/product3.jpeg';
import productImage4 from '../image/product4.jpeg';

const images = [productImage1, productImage2, productImage3, productImage4];

const ProductGallery = () => (
  <section id="products" className="py-5">
    <div className="container">
      <h3 className="text-center mb-4">Productos Destacados</h3>
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100">
              <img src={image} className="card-img-top" alt={`Producto ${index + 1}`} style={{ objectFit: 'cover', height: '400px' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Producto {index + 1}</h5>
                <p className="card-text">Descripción breve del producto.</p>
                <button className="btn btn-primary mt-auto">Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div> 
    </div>
  </section>
);

export default ProductGallery;