import React, { useState, useEffect, useCallback } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Wesley Gee',
    text: 'For the Philippines, I was in complete culture shock, coming from Nova Scotia, where the largest city has about 300,000 people, to Manilla that is enormous, congested and hot. In Belgium, I was surprised by how incredible the food was, the amazing variety of beer, and how everyone seemed to be able to speak at least three languages. If you are thinking about exchange, just do it. Go somewhere, anywhere, outside of our comfort zone. Learn new skills, meet new people, and develop a bit of grit. It will be a part of your unique and everlasting story.',
  },
  {
    name: 'Yulin Luo',
    text: 'The people I interacted with during the 6 weeks in India surprised me the most because of how welcoming everyone was. I felt supported and like I belonged in a foreign country from the very first day. To anyone thinking about exchange, I would say Know why you want to do it and embrace the experience.',
  },
  {
    name: 'Rotimi Ajasa',
    text: 'Do it! I had amazing experiences in both my exchanges (in Taiwan and China) and they were honestly the highlight of my university career so far. I made a lot of friends who I still talk to and came out with a lot of interesting stories.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Auto-scroll text testimonials
  useEffect(() => {
    const intervalId = setInterval(handleNext, 7000);
    return () => clearInterval(intervalId);
  }, [handleNext]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <h2>HEAR WHAT PEOPLE HAVE TO SAY</h2>
      
      <div className="testimonial-container">
        <div className="testimonial-content">
          <p>"{currentTestimonial.text}"</p>
          <p className="testimonial-author">- {currentTestimonial.name}</p>
        </div>

        <button onClick={handlePrev} className="nav-button prev" aria-label="Previous testimonial">
          &lt;
        </button>
        <button onClick={handleNext} className="nav-button next" aria-label="Next testimonial">
          &gt;
        </button>
      </div>

      <div className="dots-container">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;