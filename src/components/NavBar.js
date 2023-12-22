// NavBar
import './styles.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="main-nav">
    <div className="main-nav-logo">
      <img
        className="main-nav-logo-image"
        src={process.env.PUBLIC_URL + '/img/argentBankLogo.png'}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </div>
    <div>
      <div className="main-nav-item">
      <Link to="/signin" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
      </div>
    </div>
  </nav>
);

export default NavBar;
