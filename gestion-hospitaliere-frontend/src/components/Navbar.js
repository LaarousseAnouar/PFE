import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';  // Assurez-vous que ce fichier existe
import { FaUser, FaGlobe, FaStethoscope } from "react-icons/fa"; // Icônes React

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary px-4">
      <div className="container-fluid">
        
        {/* Logo */}
        <Link className="navbar-brand text-white fw-bold" to="/">
          <img src={logo} alt="DabaDoc" width="120" className="me-2" />
        </Link>

        {/* Bouton Responsive */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Liens du menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            
            {/* Bouton pour les praticiens */}
            <li className="nav-item">
              <Link className="btn btn-warning text-dark fw-bold me-2" to="/practitioner">
                <FaStethoscope /> Vous êtes un praticien ?
              </Link>
            </li>

            {/* Bouton Mon Compte */}
            <li className="nav-item">
              <Link className="btn btn-light text-dark me-2" to="/profile">
                <FaUser /> Mon Compte
              </Link>
            </li>

            {/* Sélecteur de langue */}
            <li className="nav-item">
              <button className="btn btn-outline-light me-2">
                <FaGlobe /> 🇲🇦 Maroc
              </button>
            </li>

            <li className="nav-item">
              <button className="btn btn-outline-light">🇸🇦 Arabe</button>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
