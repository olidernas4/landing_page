import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DiscountButtons from './components/DiscountButtons';
import ProductGallery from './components/ProductGallery';
import ContactForm from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonials from './components/Testimony';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <DiscountButtons />
      <ProductGallery />
      <Testimonials />
      <ContactForm />
    </>
  );
}

export default App;



