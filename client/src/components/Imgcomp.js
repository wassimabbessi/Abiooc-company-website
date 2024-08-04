import React from 'react';
import './Imgcomp.css';

const AnimatedImage = () => {
  return (
    <div className="animated-image-container">
      <div className="animated-image-overlay">
        <h2 className="animated-image-text">Discover the Finest Olive Oil</h2>
        <p className="animated-image-subtext">
          Experience the richness and quality of ABIOOC olive oil collection.
        </p>
        <div className="animated-image-buttons">
          <a href="/shop" className="animated-button">
            Explore Products
          </a>
          <a href="/" className="animated-button">
            New Arrivals
          </a>
        </div>
      </div>
      <img
        className="animated-image"
        src={require('./olv3.jpg')}
        alt="Olive Oil Image"
      />
    </div>
  );
};

export default AnimatedImage;
