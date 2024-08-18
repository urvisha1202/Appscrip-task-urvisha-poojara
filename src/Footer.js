// src/Footer.js
import React from 'react';
import './Footer.css';
import flagIcon from './asset/flag-icon.png'; // Placeholder for flag icon
import instagramIcon from './asset/instagram-icon.png'; // Placeholder for Instagram icon
import linkedinIcon from './asset/likedin-icon.png'; // Placeholder for LinkedIn icon
import cardsIcon from './asset/cards.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <h4>BE THE FIRST TO KNOW</h4>
        <p>Sign up for updates from mettā muse.</p>
        <form>
          <input type="email" placeholder="Enter your e-mail..." />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p><img src={flagIcon} alt="flag" className="flag-icon" /> </p>
          <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
        </div>
        <div className="footer-column">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <img src={instagramIcon} alt="Instagram" />
            <img src={linkedinIcon} alt="LinkedIn" />
          </div>
          <h4>mettā muse ACCEPTS</h4>
          <div className="payment-icons">
            <img src={cardsIcon} alt="Pay" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
