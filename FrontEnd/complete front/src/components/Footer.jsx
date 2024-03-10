//import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import '../assets/Footer.css'
function Footer() {
    return (
      <footer>
        <div className="social-icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          {/* Add more social media icons as needed */}
        </div>
      </footer>
    );
  }
  
  export default Footer;
  