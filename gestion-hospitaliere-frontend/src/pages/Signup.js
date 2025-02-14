import React from 'react';

const Signup = () => {
  return (
    <div className="container mt-5">
      <h2>🆕 Créer un compte</h2>
      <form>
        <div className="mb-3">
          <label>Nom</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Mot de passe</label>
          <input type="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-success">S'inscrire</button>
      </form>
      <p className="mt-3">Vous avez déjà un compte ? <a href="/login">Se connecter</a></p>
    </div>
  );
};

export default Signup;
