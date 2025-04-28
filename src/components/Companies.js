import React from 'react';
import './Companies.css';

const Companies = () => {
  const companies = Array.from({ length: 10 }, (_, i) => `${i + 1}.jpg`);

  return (
    <div className="companies-section">
      <h2>Companies We Work With</h2>
      <div className="logo-scroll">
        <div className="logos">
          {[...companies, ...companies].map((logo, index) => (
            <img
              key={index}
              src={require(`../assets/${logo}`)}
              alt={`Company ${index + 1}`}
              className="company-logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies; 