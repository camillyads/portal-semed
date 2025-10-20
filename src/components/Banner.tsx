import React, { useState, useEffect } from 'react';
import PopupsPanel from './PopupsPanel';
import './Banner.css';
import background1 from '../assets/background1.png';
import background2 from '../assets/background2.png.jpeg';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Banner: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [background1, background2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Troca a imagem a cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  return (
    <div className="banner">
      <div className="carousel">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`Banner SEMED ${index + 1}`} 
            className={`banner-image ${index === currentImageIndex ? 'active' : ''}`} 
          />
        ))}
        
        <button className="carousel-arrow carousel-arrow-left" onClick={goToPrevious}>
          <IoChevronBack size={30} />
        </button>
        
        <button className="carousel-arrow carousel-arrow-right" onClick={goToNext}>
          <IoChevronForward size={30} />
        </button>
      </div>
      <div className="banner-overlay">
        <div className="banner-text-container">
          <h2 className="banner-text"></h2>
          <h2 className="banner-text"></h2>
        </div>
      </div>
      <PopupsPanel />
    </div>
  );
};

export default Banner;