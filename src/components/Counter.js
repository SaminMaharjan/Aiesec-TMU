import React from 'react';
import CountUp from 'react-countup';
import './Counter.css';

const Counter = () => {
  return (
    <section id="our-reach" className="counter-section">
      <h2>Our Reach</h2>
      <div className="counter-container">
        <div className="counter-item">
          <CountUp 
            start={0} 
            end={1242} 
            duration={2.5} 
            separator=","
            className="counter-number"
          />
          <p className="counter-label">Instagram Followers</p>
        </div>
        
        <div className="counter-item">
          <CountUp 
            start={0} 
            end={4000} 
            duration={2.5} 
            separator=","
            className="counter-number"
          />
          <p className="counter-label">Email Subscriptions</p>
        </div>
        
        <div className="counter-item">
          <CountUp 
            start={0} 
            end={10000} 
            duration={2.5} 
            separator=","
            className="counter-number"
          />
          <p className="counter-label">Social Impressions</p>
        </div>
      </div>
    </section>
  );
};

export default Counter;