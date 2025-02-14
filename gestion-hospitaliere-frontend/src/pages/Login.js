import React from 'react';

const Login = () => {
  return (
    <div className="container mt-5">
      <h2> Se connecter</h2>
      <form>
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
