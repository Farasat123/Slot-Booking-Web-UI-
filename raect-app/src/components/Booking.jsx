// src/components/Booking.js
import React from 'react';

const Booking = () => {
  return (
    <section className="booking">
      <div className="booking-text">
        <h2>BOOK YOUR STAY</h2>
        <h1>Reserve Your Perfect Getaway</h1>
        <p>Take the first step towards your dream vacation by checking availability and securing your preferred dates. Our simple booking process ensures a seamless experience from reservation to arrival.</p>
        <ul>
          <li> Instant confirmation</li>
          <li> Best rate guarantee</li>
          <li> Flexible cancellation options</li>
          <li> Secure payment</li>
        </ul>
      </div>
      <div className="booking-form">
        <h3>Book Your Stay</h3>
        <label>Check-in Date</label>
        <input type="date" placeholder="Select date" />
        <label>Check-out Date</label>
        <input type="date" placeholder="Select date" />
        
        <label>Adults</label>
        <select>
            <option>1 Adult</option>
          <option>2 Adults</option>
          <option>3 Adults</option>
        </select>
        <label>Children</label>
        <select>
          <option>0 Children</option>
          <option>1 Children</option>
          <option>2 Children</option>
        </select>
        <button className="check-availability">Check Availability</button>
      </div>
    </section>
  );
};

export default Booking;