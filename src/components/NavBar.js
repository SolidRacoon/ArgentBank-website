// Importez les bibliothèques nécessaires
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Importez le hook useNavigate
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/'); // Redirigez l'utilisateur vers la page d'accueil après la déconnexion
  };

  return (
    <nav className="main-nav">
      <div className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={process.env.PUBLIC_URL + '/img/argentBankLogo.webp'}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </div>
      <div>
        <div className="main-nav-item">
          {isLoggedIn ? (
            <span onClick={handleLogout}>Logout</span>
          ) : (
            <Link to="/signin" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
