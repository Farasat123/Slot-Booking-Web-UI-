// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Welcome from './components/Welcome';
import FeaturedApartments from './components/FeaturedApartments';
import Amenities from './components/Amenities';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Welcome />
      <FeaturedApartments />
      <Booking />
      <Amenities />
      <Reviews />
      
      <Footer />
    </div>
  );
}

export default App;