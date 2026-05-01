// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <span className="logo"> MareSereno</span>
        <p>Luxurious beachfront apartments and hotel rooms with stunning sea views, offering the perfect blend of comfort and elegance for your dream vacation.</p>
      </div>
      <div className="quick-links">
        <h4>Quick Links</h4>
        <ul>
          <strong>
          <li >Home</li>
          <li>Apartments</li>
          <li>Amenities</li>
          <li>Gallery</li>
          <li>Contact</li>
          <li>Book Now</li>
          </strong>
        </ul>
      </div>
      <div className="contact">
        <h4>Contact</h4>
        <p> Viale del Mandorlo, 3, 74026 Marina di Pulsano TA, Italy</p>
        <p> +39 458 6322 145</p>
        <p> info@maresereno.com</p>
      </div>
      <div className="newsletter">
        <h4>Newsletter</h4>
        <p>Subscribe to our newsletter for special deals and updates.</p>
        <input type="email" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;