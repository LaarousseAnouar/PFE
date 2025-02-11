import React from 'react';
import Header from '../components/Header';
import Specialties from '../components/Specialties';
import Doctors from '../components/Doctors';
import Booking from '../components/Booking';

const Home = () => {
  return (
    <div>
      <Header />
      <Specialties />
      <Doctors />
      <Booking />
    </div>
  );
};

export default Home;
