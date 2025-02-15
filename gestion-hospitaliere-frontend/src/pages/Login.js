import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); // Hook pour la redirection

  const handleLogin = (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Simuler une connexion réussie (remplacer plus tard par une vraie authentification)
    console.log("Utilisateur connecté !");
    
    // Rediriger vers la page principale de l'hôpital
    navigate('/home');
  };

  return (
    <div className="container mt-5">
      <h2>🔑 Se connecter</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Mot de passe</label>
          <input type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Connexion</button>
      </form>
      <p className="mt-3">Vous n'avez pas de compte ? <a href="/signup">Créer un compte</a></p>
    </div>
  );
};

export default Login;
