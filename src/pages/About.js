import React from 'react';
import Counter from '../components/Counter';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About AIESEC at TMU</h1>
        <p className="about-description">
          AIESEC at TMU is part of the global AIESEC network. We provide students with leadership 
          opportunities and international experiences.
        </p>
        
        <Counter />

        <div className="about-sections">
          <section className="about-section history-section">
            <h2>Our History</h2>
            <p>
              AIESEC was founded in 1948 and has grown into a worldwide youth movement 
              that empowers individuals to make a positive impact on society.
            </p>
          </section>

          <section className="about-section values-section">
            <h2>Our Values</h2>
            <ul className="values-grid">
              <li className="value-item">Leadership</li>
              <li className="value-item">Responsibility</li>
              <li className="value-item">Innovation</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;