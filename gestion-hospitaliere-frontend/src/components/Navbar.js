import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // حالة المستخدم: مسجل أم لا

  const handleLogin = () => {
    // هنا يتم توجيه المستخدم إلى صفحة تسجيل الدخول
    window.location.href = "/login";
  };

  const handleSignup = () => {
    // هنا يتم توجيه المستخدم إلى صفحة إنشاء حساب جديد
    window.location.href = "/signup";
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // تسجيل الخروج
    window.location.href = "/"; // إعادة توجيه المستخدم إلى الصفحة الرئيسية
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container d-flex justify-content-end">
        
        {/* زر "Vous êtes un praticien ?" */}
        <button className="btn btn-warning fw-bold me-2">
           Vous êtes un praticien ?
        </button>

        {/* قائمة "Mon Compte" */}
        <div className="dropdown">
          <button 
            className="btn btn-light fw-bold me-2 dropdown-toggle"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
             Mon Compte
          </button>

          {isDropdownOpen && (
            <ul className="dropdown-menu show">
              {isLoggedIn ? (
                // إذا كان المستخدم متصلًا، عرض خيارات الحساب
                <>
                  <li><a className="dropdown-item" href="/profile"> Mon Profil</a></li>
                  <li><a className="dropdown-item" href="/appointments">Mes Rendez-vous</a></li>
                  <li><a className="dropdown-item" href="/settings">⚙️ Paramètres</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                       Déconnexion
                    </button>
                  </li>
                </>
              ) : (
                // إذا لم يكن المستخدم متصلًا، عرض أزرار تسجيل الدخول وإنشاء الحساب
                <>
                  <li><button className="dropdown-item" onClick={handleLogin}> Se connecter</button></li>
                  <li><button className="dropdown-item" onClick={handleSignup}> Créer un compte</button></li>
                </>
              )}
            </ul>
          )}
        </div>

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
