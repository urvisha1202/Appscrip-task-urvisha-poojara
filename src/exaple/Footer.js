import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="newsletter">
          <h4>Be the first to know</h4>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>Address, Phone, Email</p>
        </div>
      </div>
      <div className="social-links">
        <a href="#facebook">Facebook</a>
        <a href="#twitter">Twitter</a>
        {/* Add more social links */}
      </div>
    </footer>
  );
};

export default Footer;
