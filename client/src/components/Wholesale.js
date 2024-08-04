import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdArrowForward } from 'react-icons/md';
import Bottle1 from '../components/bottle1.png';
import './Wholesale.css';

const wholesaleData = [
  {
    category: 'Extra Virgin Olive Oil',
    image: Bottle1,
    sizes: ['100L', '500L', '1000L'],
    description:
      'Our Extra Virgin Olive Oil is made from the finest olives, handpicked at the peak of ripeness to ensure maximum flavor and freshness. Perfect for cooking or drizzling over your favorite dishes.',
  },
  {
    category: 'Flavored Olive Oil',
    image: Bottle1,
    sizes: ['100L', '500L', '1000L'],
    description:
      'Our Flavored Olive Oil is infused with natural herbs and spices to give your dishes a unique and delicious flavor. Try it on salads, pasta, or roasted vegetables!',
  },
  {
    category: 'Infused Olive Oil',
    image: Bottle1,
    sizes: ['100L', '500L', '1000L'],
    description:
      'Our Infused Olive Oil is made with fresh herbs, garlic, and other natural ingredients, creating a robust and flavorful oil that is perfect for cooking, dipping, or drizzling.',
  },
];

const Wholesale = () => {
  const [selected, setSelected] = useState(0);

  const imgProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {
      mass: 1,
      tension: 170,
      friction: 26,
    },
  });

  const infoProps = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-30px)' },
    config: {
      mass: 1,
      tension: 170,
      friction: 26,
    },
  });

  const handleCategoryClick = (index) => {
    setSelected(index);
  };

  return (
    <div className="wholesale-container">
      <div className="wholesale-images">
        {wholesaleData.map((product, index) => (
          <div
            key={index}
            className={`wholesale-image ${
              selected === index ? 'selected' : ''
            }`}
            onClick={() => handleCategoryClick(index)}
          >
            <animated.img
              src={product.image}
              style={imgProps}
              alt={product.category}
            />
            <h3>{product.category}</h3>
          </div>
        ))}
      </div>

      <animated.div className="wholesale-info" style={infoProps}>
        <h2>{wholesaleData[selected].category}</h2>
        <p>{wholesaleData[selected].description}</p>
        <ul>
          {wholesaleData[selected].sizes.map((size, index) => (
            <li key={index}>{size}</li>
          ))}
        </ul>
        <div className="arrow-container">
          <MdArrowForward />
        </div>
      </animated.div>
    </div>
  );
};

export default Wholesale;
