// src/components/Reviews.js
import React from 'react';
import Img2 from "../assets/images/02.jpeg";
const Reviews = () => {
  return (
    <section className="reviews">
      <h1>What Our Guests Say</h1>
      <p>Discover why our guests keep coming back to MareSereno for their seaside getaways.</p>
      <div className="review-card">
        <div className="img-tag">
        <img src= {Img2} alt="Emma Johnson" className="avatar" />
         <p>★★★★★</p>
         <strong>Emma Johnson, London, UK</strong>
         </div>
        <div className="review-content">
          
          <p>"We spent a wonderful week at this beachfront paradise. The sunrise views from our terrace were worth the trip alone. Exceptionally clean and beautifully designed space."</p>
          
        </div>
      </div>
    </section>
  );
};

export default Reviews;