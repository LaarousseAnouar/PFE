import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home'; // Page principale de l'hôpital

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar toujours visible */}
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} /> {/* Rediriger "/" vers "/home" */}
        <Route path="/home" element={<Home />} /> {/* Afficher la page d'accueil dès l'entrée */}
        <Route path="/login" element={<Login />} /> {/* Page de connexion */}
        <Route path="/signup" element={<Signup />} /> {/* Page d'inscription */}
      </Routes>
    </Router>
  );
}

export default App;
