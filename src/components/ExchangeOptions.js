import React from 'react';
import './ExchangeOptions.css'; // We'll create this CSS file

const optionsData = [
  {
    id: 1,
    title: 'Global Teacher',
    description: 'Teach various subjects in a school abroad and assist in developing the education and growth of students in countries across the world.',
    cost: '$770 CAD',
    duration: '9-78 weeks',
    includes: ['Salary', 'Pre-Departure Preparation Seminar', 'AIESEC Experience Manager Support'],
    // color: '#FF6B35' // Orange
  },
  {
    id: 2,
    title: 'Global Volunteer',
    description: 'Volunteer with an NGO or Non Profit and contribute to fulfilling projects related to the United Nations Sustainable Development Goals.',
    cost: '$620 CAD',
    duration: '4-6 weeks',
    includes: ['Food Included (depending on project)', 'Accommodation with Host Provided', 'Pre-Departure Preparation Seminar', 'AIESEC Experience Manager Support'],
    // color: '#EF476F' // Red
  },
  {
    id: 3,
    title: 'Global Talent',
    description: 'Gain international work experience by interning with a corporation in fields related to IT, marketing, business, software,and engineering.',
    cost: '$670-770 CAD',
    duration: '6-78 weeks',
    includes: ['Salary', 'Pre-Departure Preparation Seminar', 'AIESEC Experience Manager Support'],
    // color: '#118AB2' // Blue
  }
];

// //highlight
// // Add this helper component at the top of your file
// const HighlightText = ({ text, keywords }) => {
//     if (!keywords) return text;
    
//     // Split text into parts, highlighting keywords
//     const parts = text.split(new RegExp(`(${keywords.join('|')})`, 'gi'));
    
//     return parts.map((part, i) => 
//       keywords.includes(part.toLowerCase()) ? (
//         <strong key={i} className="highlight">{part}</strong>
//       ) : (
//         part
//       )
//     );
//   };
  
//   // Then modify the includes list rendering:
//   {optionsData.includes.map((item, index) => (
//     <li key={index}>
//       <HighlightText 
//         text={item} 
//         keywords={['accommodation', 'food', 'ngo']} 
//       />
//     </li>
//   ))}


const ExchangeOptions = () => {
  return (
    <section className="exchange-options">
      <div className="container">
        <h2>OUR EXCHANGE OPTIONS</h2>
        
        <div className="bento-grid">
          {optionsData.map((option) => (
            <div 
              key={option.id} 
              className="bento-card"
              style={{ '--accent-color': option.color }}
            >
              <div className="color-bar"></div>
              <div className="card-content">
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                
                <div className="details">
                  <div className="detail-row">
                    <span>Cost/Fee:</span>
                    <span className="cost">{option.cost}</span>
                  </div>
                  <div className="detail-row">
                    <span>Duration:</span>
                    <span>{option.duration}</span>
                  </div>
                  
                  <div className="includes">
                    <h4>Includes:</h4>
                    <ul>
                      {option.includes.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <a 
          href="https://www.aiesec.ca/exchange-signup" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-button"
        >
          Go on an Exchange
        </a>
      </div>
    </section>
  );
};

export default ExchangeOptions;