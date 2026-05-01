// src/components/Amenities.js
import React from 'react';

const Amenities = () => {
  return (
    <section className="amenities">
      <h2>HOTEL AMENITIES</h2>
      <h1>Experience The Best</h1>
      <p>Enjoy our premium facilities and services designed to make your stay exceptional.</p>
      <div className="amenity-cards">
        <div className="card">
          <div className="icon">🌊</div>
          <h3>Beachfront Location</h3>
          <p>Direct access to pristine beaches with crystal clear waters.</p>
        </div>
        <div className="card">
          <div className="icon">🏊</div>
          <h3>Swimming Pools</h3>
          <p>Relax by our infinity pools with stunning sea views.</p>
        </div>
        <div className="card">
          <div className="icon">🍴</div>
          <h3>Gourmet Restaurant</h3>
          <p>Enjoy exquisite local and international cuisine.</p>
        </div>
        <div className="card">
          <div className="icon">📶</div>
          <h3>High-Speed Wi-Fi</h3>
          <p>Stay connected with complimentary high-speed internet.</p>
        </div>
        <div className="card">
          <div className="icon">☕</div>
          <h3>Beach Bar & Café</h3>
          <p>Refreshing drinks and snacks served right on the beach.</p>
        </div>
        <div className="card">
          <div className="icon">📍</div>
          <h3>Prime Location</h3>
          <p>Close to local attractions, shops, and restaurants.</p>
        </div>
      </div>
    </section>
  );
};

export default Amenities;