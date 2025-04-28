
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          
        </div>

        <div className="footer-center">
        <div className="social-links">
            <a href="https://www.instagram.com/lc.tmu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/company/aiesec-in-ryerson/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        <div className="footer-right">
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 AIESEC in TMU (Toronto Metropolitan University) All rights reserved.</p>
        <p className="designer">
          Designed by{' '}
          <a href="https://www.linkedin.com/in/saminmaharjan/" target="_blank" rel="noopener noreferrer">
            @saminmaharjan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 