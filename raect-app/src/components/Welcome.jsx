import React from "react";
import Img1 from "../assets/images/01.jpeg";
import Img2 from "../assets/images/02.jpeg";
import Img3 from "../assets/images/03.jpeg";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-text">
        <h2>Welcome to MareSereno</h2>
        <h1>Luxury Seaside Accommodations</h1>
        <p>
          Nestled on the pristine Mediterranean coastline, MareSereno offers an
          exquisite collection of luxury apartments and hotel rooms. Our
          beachfront accommodations combine elegant design with modern comfort,
          creating the perfect setting for an unforgettable seaside getaway.
        </p>
        <p>
          Whether you're seeking a romantic escape, a family vacation, or a
          peaceful retreat, our diverse range of accommodations caters to every
          preference and need. Each space is thoughtfully designed to provide
          panoramic sea views and direct beach access.
        </p>
        <button className="learn-more">Learn More →</button>
      </div>
      <div className="welcome-images">
        <img src={Img1} alt="Sea View 1" />
        <img src={Img2} alt="Sea View 2" />
        <img src={Img3} alt="Sea View 3" />
      </div>
    </section>
  );
};

export default Welcome;
