// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li><span className="icon"></span> Home</li>
          <li><span className="icon"></span> Apartments</li>
          <li><span className="icon"></span> Amenities</li>
          <li><span className="icon"></span> Gallery</li>
          <li><span className="icon"></span> Contact</li>
        </ul>
        <div className="lang-selector">
          <span> GB English ▼</span>
        </div>
        <button className="book-now">Book Now</button>
      </nav>
    </header>
  );
};

export default Header;