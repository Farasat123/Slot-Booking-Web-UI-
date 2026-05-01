// src/components/Banner.js
import React from 'react';
import Img5 from "../assets/images/05.jpg";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Experience Seaside Tranquility</h1>
        <p>Discover our exclusive collection of luxury beachfront apartments and hotel rooms, offering unparalleled comfort and breathtaking sea views.</p>
        <button className="book-stay">Book Your Stay</button>
        <button className="explore-apts">Explore Apartments</button>
      </div>
      <img src={Img5} alt="Beachfront" className="banner-img" />
    </section>
  );
};

export default Banner;