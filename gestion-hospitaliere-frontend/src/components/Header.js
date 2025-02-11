import React from 'react';
import doctorImage from '../assets/doctors/doctor3.jpg';

const Header = () => {
  return (
    <header className="bg-light py-4">
      <div className="container text-center">
        <div className="card shadow-lg p-4 border-0">
          <img src={doctorImage} alt="Doctor" className="rounded-circle mb-3" width="120" />
          <h1 className="fw-bold text-primary">Clinique Al Kawtar</h1>
          <p className="text-muted">Av Mohamed Al Fassi, Route D Immouzzer - Fès, Maroc</p>
          <button className="btn btn-outline-primary fw-bold px-4 py-2">📞 Afficher Tél</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
