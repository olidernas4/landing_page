import React from 'react';
import { Carousel } from 'react-bootstrap';
import heroImage1 from '../image/deport1.jpeg';
import heroImage2 from '../image/deport2.jpg';


const HeroSection = () => (
  <section id="hero" className="text-white text-center py-5">
    <div className="container">
      <h2>¡Descubre lo que Quest tiene para ti!</h2>
      <p className="lead">Promociones exclusivas y productos destacados a un clic.</p>
      <Carousel className="mt-4" interval={2000}>
        <Carousel.Item>
          <img src={heroImage1} alt="Hero 1" className="d-block w-100 img-fluid rounded" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={heroImage2} alt="Hero 2" className="d-block w-100 img-fluid rounded" />
        </Carousel.Item>
        
      </Carousel>
    </div>
  </section>
);

export default HeroSection;
