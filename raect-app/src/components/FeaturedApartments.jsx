// src/components/FeaturedApartments.js
import React from "react";
import Img1 from "../assets/images/01.jpeg";
import Img2 from "../assets/images/02.jpeg";
import Img3 from "../assets/images/03.jpeg";

const apartments = [
  {
    id: 1,
    image: Img1,
    title: "Deluxe Sea View Suite",
    details: "Beachfront • 2 Guests • 45 m²",
    description:
      "Luxurious suite with panoramic sea views, modern amenities, and a private balcony.",
    amenities: "Wi-Fi • Kitchen • Bathroom +3 more",
    price: "$180 / night",
  },
  {
    id: 2,
    image: Img2,
    title: "Premium Family Apartment",
    details: "Second row • 4 Guests • 75 m²",
    description:
      "Spacious apartment ideal for families, with full kitchen and stunning coastal views.",
    amenities: "Wi-Fi • Kitchen • Bathroom +3 more",
    price: "$250 / night",
  },
  {
    id: 3,
    image: Img3,
    title: "Executive Beach Studio",
    details: "Beachfront • 2 Guests • 35 m²",
    description:
      "Elegant studio with direct beach access, modern design, and premium finishes.",
    amenities: "Wi-Fi • Kitchenette • Bathroom +2 more",
    price: "$150 / night",
  },
];

const FeaturedApartments = () => {
  return (
    <section className="featured">
      <div className="featured-header">
        <h1>Featured Apartments</h1>
        <p>
          Discover our most popular accommodation options, each offering a
          perfect blend of comfort, style, and breathtaking sea views.
        </p>
      </div>

      <div className="apartment-cards">
        {apartments.map((apt) => (
          <div key={apt.id} className="card">
            <img src={apt.image} alt={apt.title} className="card-image" />

            <div className="card-body">
              <h3>{apt.title}</h3>
              <p className="card-details">{apt.details}</p>
              <p className="card-description">{apt.description}</p>
              <div className="amenities">{apt.amenities}</div>
              <p className="price">{apt.price}</p>
              <button className="view-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedApartments;
