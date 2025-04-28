import React, { useEffect, useRef } from 'react';
import './VideoTestimonials.css';

const VideoTestimonials = () => {
  const reels = [
    'https://www.instagram.com/reel/CvIiLiQtfFb/',
    'https://www.instagram.com/reel/Chmaw7fgn7b/',
    'https://www.instagram.com/p/BgJZwAeFo5i/',
    'https://www.instagram.com/p/BbAc1gBhsA8/',
    'https://www.instagram.com/p/DIEjZTTomte/',
  ];

  const containerRef = useRef(null);

  // Scroll functions
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="video-testimonials">
      {/* <h2>VIDEO TESTIMONIALS</h2> */}
      
      <div className="reels-container-wrapper">
        <button className="scroll-button left" onClick={scrollLeft}>
          &lt;
        </button>
        
        <div className="reels-container" ref={containerRef}>
          {reels.map((reel, index) => (
            <div key={index} className="reel-wrapper">
              <blockquote 
                className="instagram-media" 
                data-instgrm-permalink={reel}
                data-instgrm-version="14"
              >
                <div className="loading-reel">
                  <p>Loading video...</p>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
        
        <button className="scroll-button right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default VideoTestimonials;