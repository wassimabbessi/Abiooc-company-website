import { useSpring, useTrail, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import Navlogo3 from './Navlogo3.png';
import './About.css';

function About() {
  const navigate = useNavigate();

  const spring1 = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 500,
    config: { duration: 1000 },
  });

  const trail = useTrail(4, {
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    delay: 1000,
    config: { duration: 1000 },
  });

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="about-container">
      <div className="image-container">
        <animated.img
          style={{
            ...spring1,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          src={Navlogo3}
          alt="Olive oil"
        />
      </div>
      <div className="text-container">
        <animated.h1 style={trail[0]}>About us</animated.h1>
        <animated.p style={{ ...trail[1], color: 'black' }}>
          Introducing ABIOOC (Abbes Biological Olive Oil Company), a pioneering
          new venture rooted in the breathtaking landscapes of Majel Bel Abbes,
          Tunisia. With a deep reverence for nature and a commitment to
          sustainable practices, ABIOOC brings you the finest biological olive
          oil of exceptional quality. At ABIOOC, we believe in the harmonious
          coexistence of tradition and innovation. Our olives are carefully
          cultivated in the fertile soils of Majel Bel Abbes, where they thrive
          under the Mediterranean sun. Embracing organic farming methods, we
          prioritize the health of the olive trees and the preservation of the
          environment.
        </animated.p>
        <animated.button
          style={trail[2]}
          onClick={handleContactClick}
          class="btn btn-success"
        >
          Contact us
        </animated.button>
      </div>
      <div className="brand-description">
        <div className="brand-description-bar"></div>
        <animated.p style={trail[3]}>
          <p>
            Every step of our production process is meticulously crafted to
            ensure the highest standards of quality. From hand-picking the
            olives at optimal ripeness to using state-of-the-art extraction
            techniques, we extract the purest essence of the olives, resulting
            in an extraordinary olive oil with unparalleled flavor and
            nutritional value. ABIOOC is more than just a company; it is a
            celebration of the rich heritage and natural abundance of Majel Bel
            Abbes. Our mission is to share the authentic flavors and cultural
            legacy of our region with the world, while promoting sustainable
            practices and supporting local farmers. Join us on a journey of
            taste and tradition as we invite you to experience the distinctive
            character of ABIOOC olive oil. Indulge in the richness of our
            biological olive oil, a testament to our unwavering dedication to
            excellence, sustainability, and the bountiful lands of Majel Bel
            Abbes.
          </p>
        </animated.p>
      </div>
      <div className="founder-description">
        <div className="founder-image">
          <img src={require('./founder.jpg')} alt="Founder Image" />
        </div>
        <div className="founder-text">
          <animated.h2 style={trail[4]}>Our Founder</animated.h2>
          <animated.p style={trail[5]}>
            Discover the visionary behind ABIOOC, Abbes Mansouri. Hailing from
            Majel Bel Abbes, Abbes is a passionate advocate for agriculture.
            With a deep connection to the land, he established ABIOOC to
            redefine the olive oil industry. Guided by a commitment to
            excellence, Abbes meticulously crafts each bottle of ABIOOC olive
            oil. Drawing inspiration from Majel Bel Abbes' fertile grounds, he
            delivers an unparalleled sensory experience that captures the
            essence of his agricultural heritage. Experience the culmination of
            Abbes Mansouri's passion and expertise. Explore ABIOOC's exceptional
            olive oil, a testament to his dedication and the timeless traditions
            of Majel Bel Abbes.
          </animated.p>
        </div>
      </div>
      <div className="founder-description">
        <div className="founder-image">
          <img src={require('./oil.jpeg')} alt="Founder Image" />
        </div>
        <div className="founder-text">
          <animated.h2 style={trail[4]}>Our Production </animated.h2>
          <animated.p style={trail[5]}>
            ABIOOC Olive Oil is a testament to our dedication to producing the
            highest quality olive oil. Sourced from carefully selected olives in
            the sun-kissed Mediterranean region, our oil is crafted with
            meticulous care. Our olives are hand-picked at their peak ripeness,
            ensuring optimal flavor and aroma. Through traditional and
            sustainable methods, we extract the oil, preserving its natural
            goodness and health benefits. Cold-pressed to retain nutrients,
            antioxidants, and distinct characteristics, ABIOOC Olive Oil is a
            perfect addition to a healthy lifestyle. With a harmonious blend of
            fruity notes, subtle bitterness, and a delightful peppery finish,
            our olive oil enhances culinary creations. Its golden hue,
            reminiscent of Mediterranean landscapes, captures the essence of our
            carefully nurtured olives. ABIOOC Olive Oil not only elevates
            flavors but also offers numerous health benefits. Packed with
            heart-healthy monounsaturated fats, polyphenols, and vitamins, our
            oil supports overall well-being. We prioritize sustainability,
            employing organic farming techniques and minimizing waste. From
            cultivation to packaging, we strive for minimal environmental
            impact. Drizzle ABIOOC Olive Oil over salads, use it as a marinade,
            or savor it with freshly baked bread. Embrace a tradition rooted in
            authenticity and exceptional taste. Experience the essence of the
            Mediterranean with ABIOOC Olive Oil—a blend of nature's finest,
            crafted for your culinary pleasure.
          </animated.p>
        </div>
      </div>
    </div>
  );
}

export default About;
