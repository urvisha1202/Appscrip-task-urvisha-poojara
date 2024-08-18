import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLanguage, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="path-to-logo-image" alt="Logo" />
      </div>
      <nav className="navigation">
        <h2 align="center" >LOGO</h2>
        <ul>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#sales">Sales</a></li>
          <li><a href="#stories">Stories</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <div className="header-icons">
        <a href="#search"><FontAwesomeIcon  icon={faSearch}/></a>
        <a href="#cart"><FontAwesomeIcon  icon={faHeart}/></a>
        <a href="#cart"><FontAwesomeIcon  icon={faBagShopping}/></a>
        <a href="#profile"><FontAwesomeIcon  icon={faPerson}/></a>
        <a href="#profile"><FontAwesomeIcon  icon={faLanguage}/></a>

      </div>
    </header>
      
  );
};

export default Header;
