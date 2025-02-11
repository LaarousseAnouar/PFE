import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p>© 2025 DabaDoc - Tous droits réservés</p>
      <nav>
        <a href="/" className="text-white mx-2">Accueil</a>
        <a href="/about" className="text-white mx-2">À propos</a>
        <a href="/contact" className="text-white mx-2">Contact</a>
      </nav>
    </footer>
  );
};

export default Footer;
