import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    // Check if the current scroll position is greater than the previous one (scrolling down)
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);  // Hide the navbar when scrolling down
    } else {
      setShowNavbar(true);  // Show the navbar when scrolling up
    }
    lastScrollY = window.scrollY;  // Update the last scroll position
  };

  useEffect(() => {
    // Add scroll event listener when the component is mounted
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? 'show' : 'hide'}`}>  {/* Apply classes conditionally */}
    {/* <div className="navbar-logo">
      <img src="images/human-logo.png" alt="AIESEC Logo" />
    </div> */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/team">Team</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
