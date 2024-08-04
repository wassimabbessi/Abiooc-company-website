import React, { useState } from 'react';
import './Production.css';
import BOTTLLING from './BOTTLING.jpeg';
import Harvesting from './Harvesting.jpg';
import Sorting from './Sorting.jpg';
import Washing2 from './Washing2.jpg';
import grinding from './grinding.jpg';
import press from './press.jpg';
import decanting from './decanting.jpeg';
import filtering from './filtering.jpeg';

const OliveOilProduction = () => {
  const steps = [
    {
      title: 'Harvesting',
      description: 'Olives are harvested from the trees.',
      image: Harvesting,
    },
    {
      title: 'Sorting',
      description:
        'The harvested olives are sorted to remove any damaged or low-quality ones.',
      image: Sorting,
    },
    {
      title: 'Washing',
      description:
        'The olives are thoroughly washed to remove dirt and impurities.',
      image: Washing2,
    },
    {
      title: 'Grinding',
      description:
        'The clean olives are crushed into a paste using large grinding stones.',
      image: grinding,
    },
    {
      title: 'Pressing',
      description:
        'The olive paste is pressed to extract the oil and separate it from the solids.',
      image: press,
    },
    {
      title: 'Decanting',
      description:
        'The extracted olive oil is allowed to settle and separate from any remaining water or impurities.',
      image: decanting,
    },
    {
      title: 'Filtering',
      description:
        'The olive oil is filtered to remove any remaining particles.',
      image: filtering,
    },
    {
      title: 'Bottling',
      description:
        'The filtered olive oil is bottled and ready for consumption.',
      image: BOTTLLING,
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div className="production-container">
      <div className="step-bar">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index === activeStep ? 'active' : ''}`}
            onClick={() => handleStepClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="step-cards">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`production-step ${
              index === activeStep ? 'active' : ''
            }`}
            onClick={() => handleStepClick(index)}
          >
            <div className="step-number">{index + 1}</div>
            <h2 className="step-title">{step.title}</h2>
            <p className="step-description">{step.description}</p>
            <img src={step.image} alt={step.title} className="step-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OliveOilProduction;
