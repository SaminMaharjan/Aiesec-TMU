import React from 'react';
import { Link } from 'react-scroll';
import './Home.css';
import Testimonials from '../components/Testimonials';
import ExchangeOptions from '../components/ExchangeOptions';
import VideoTestimonials from '../components/VideoTestimonials.js';

const Home = () => {
  // Array of company logos with their correct extensions
  const companyLogos = [
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.png',
    '8.jpg',
    '9.jpg',

  ];

  const heroStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/group.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" style={heroStyle}>
        <div className="hero-content">
          <h1>Welcome to AIESEC at TMU</h1>
          <h2>Your Path to Global Exchange and Leadership Development</h2>
          <Link
            to="about-section"
            smooth={true}
            duration={500}
            className="cta-button"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="about-section">
        <div className="about-content">
          <h2>What is AIESEC?</h2>
          <p className="fade-in">
            AIESEC is a global platform for young people to explore and develop their leadership potential through international exchange programs and professional opportunities.
          </p>
          
          <h2>Our Mission</h2>
          <p className="fade-in">
            To develop youth leadership by empowering young people to take action on global challenges.
          </p>
          
          <h2>Global Impact</h2>
          <p className="fade-in">
            With a presence in over 100 countries, AIESEC has been at the forefront of global leadership development, creating opportunities for young people to make a positive impact on society.
          </p>
        </div>
      </section>

 <ExchangeOptions/>
      <Testimonials />

<VideoTestimonials />


      {/* Companies Section */}
      <section className="companies-section">
        <h2>Companies We Work With</h2>
        <div className="logo-scroll">
          <div className="logos">
            {[...companyLogos, ...companyLogos].map((logo, index) => (
              <img
                key={index}
                src={`/images/${logo}`}
                alt={`Company ${index + 1}`}
                className="company-logo"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
