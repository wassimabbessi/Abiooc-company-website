import React from 'react';
import './Awards.css';

const AwardImage = () => {
  return (
    <div className="award-image-container">
      <h2 className="award-image-text"> Awards</h2>
      <p className="award-image-subtext">Recognizing Excellence in Olive Oil</p>
      <img
        className="award-image"
        src={require('./awards.png')}
        alt="Award Image"
      />
    </div>
  );
};

export default AwardImage;
