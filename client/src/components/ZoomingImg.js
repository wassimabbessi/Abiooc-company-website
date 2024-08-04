import React from 'react';
import './ZoomingImg.css';

const ZoomingImage = () => {
  return (
    <div className="zooming-image-container">
      <img
        className="zooming-image"
        src={require('./olivi.jpg')}
        alt="Zooming Image"
      />
      <div className="zooming-image-overlay">
        <h1 className="zooming-image-text">
          Indulge in the Rich Flavors of Our Premium Olive Oils !
        </h1>
      </div>
    </div>
  );
};

export default ZoomingImage;
