import React from 'react';
import './OurLand.css';

function OurLand() {
  return (
    <div className="ourland-container">
      <div className="ourland-header">
        <h1>
          <span>M</span>
          <span>A</span>
          <span>J</span>
          <span>E</span>
          <span>L</span>
          <span>&nbsp;</span>
          <span>B</span>
          <span>E</span>
          <span>L</span>
          <span>&nbsp;</span>
          <span>A</span>
          <span>B</span>
          <span>B</span>
          <span>E</span>
          <span>S</span>
        </h1>
        <p>A land with hidden treasures</p>
      </div>
      <div className="ourland-body">
        <p>
          Simplicity is becoming a fantasy nowadays in our modern world.
          However, in Majel Bel Abbes, we treasure the simplicity that we have.
          Majel Bel Abbes is a mid-western small town surrounded by the Atlas
          Mountains and Desert, the perfect climate for wild olives. In Majel
          bel Abbes, we take good care of our olives. We believe that they are
          our heritage from ancestors. Adding to that, our olives are veryunique
          as they are grown in an arid climate. The dry weather helps produce
          antioxidant polyphenols that extract a unique olive oil. Our mission
          is to maintain the local varieties like Chamchali and Chemleli. These
          varieties offer us sweet, fruity olive oil with a slight bitterness
          that keeps you wondering about this combination.
        </p>
      </div>
      <div className="ourland-gallery">
        <div className="ourland-image">
          <div className="ourland-image-overlay"></div>
          <img src={require('./ourland1.jpg')} alt="olive trees" />
          <h2>Mountains</h2>
        </div>
        <div className="ourland-image">
          <div className="ourland-image-overlay"></div>
          <img src={require('./ourland2.jpg')} alt="olive trees" />
          <h2>100% Natural</h2>
        </div>
        <div className="ourland-image">
          <div className="ourland-image-overlay"></div>
          <img src={require('./ourland3.jpg')} alt="olive trees" />
          <h2>Biologic Olives</h2>
        </div>
      </div>
      <div className="ourland-footer">
        <p>Explore our land today!</p>
      </div>
    </div>
  );
}

export default OurLand;
