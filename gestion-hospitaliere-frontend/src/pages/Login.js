import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // حفظ حالة تسجيل الدخول في localStorage
    localStorage.setItem('isLoggedIn', 'true');

    console.log("Utilisateur connecté !");
    
    // إعادة التوجيه إلى الصفحة الرئيسية
    navigate('/home');

    // إعادة تحميل الصفحة لضمان تحديث Navbar
    window.location.reload();
  };

  return (
    <div className="container mt-5">
      <h2> Se connecter</h2>
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
