import React, { useState } from 'react';
import doctorImage from '../assets/doctors/hopital2.jpg';

const Header = () => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <header className="bg-light py-4">
      <div className="container">
        <div className="card shadow-lg p-4 border-0">
          {/* Section pour aligner l'image et le texte horizontalement */}
          <div className="d-flex align-items-center">
            {/* Image du docteur */}
            <img 
              src={doctorImage} 
              alt="Doctor" 
              className="doctor-image me-3" // Ajout de "me-3" pour espacement
            />

            {/* Informations de la clinique */}
            <div>
              <h1 className="fw-bold text-primary mb-0">Clinique Al Kawtar</h1>
              <p className="text-muted mb-0">Av Mohamed Al Fassi, Route D Immouzzer - Fès, Maroc</p>
            </div>
          </div>

          {/* Bouton pour afficher/masquer le numéro de téléphone */}
          <div className="text-center mt-3">
            <button 
              className="btn btn-outline-primary fw-bold px-4 py-2 btn-show-phone"
              onClick={() => setShowPhone(!showPhone)}
            >
              📞 {showPhone ? "Afficher Tél" : "0706102030"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
