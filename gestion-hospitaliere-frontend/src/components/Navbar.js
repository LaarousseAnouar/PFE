import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // التحقق من حالة تسجيل الدخول عند تحميل الصفحة
  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(userLoggedIn === 'true'); // تحديث الحالة تلقائيًا عند إعادة تحميل الصفحة
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // حذف حالة تسجيل الدخول
    setIsLoggedIn(false); // تسجيل خروج المستخدم
    navigate('/login'); // إعادة التوجيه إلى صفحة تسجيل الدخول
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container d-flex justify-content-end">

        {/* زر "Vous êtes un praticien ?" */}
        <button className="btn btn-warning fw-bold me-2">
           Vous êtes un praticien ?
        </button>

        {/* عرض القائمة بناءً على حالة تسجيل الدخول */}
        {isLoggedIn ? (
          <div className="dropdown">
            <button 
              className="btn btn-light fw-bold me-2 dropdown-toggle"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
               Mon Compte
            </button>

            {isDropdownOpen && (
              <ul className="dropdown-menu show">
                <li><a className="dropdown-item" href="/profile"> Mon Profil</a></li>
                <li><a className="dropdown-item" href="/appointments"> Mes Rendez-vous</a></li>
                <li><a className="dropdown-item" href="/settings">⚙️ Paramètres</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button className="dropdown-item text-danger" onClick={handleLogout}>
                     Déconnexion
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <>
            <button className="btn btn-light fw-bold me-2" onClick={() => navigate('/login')}>
               Se connecter
            </button>
            <button className="btn btn-outline-light fw-bold" onClick={() => navigate('/signup')}>
               Créer un compte
            </button>
          </>
        )}

        {/* زر اختيار البلد */}
        <button className="btn btn-outline-light fw-bold me-2">
          🌍 MA Maroc
        </button>

        {/* زر تغيير اللغة */}
        <button className="btn btn-outline-light fw-bold">
          🌐 Arabe
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
