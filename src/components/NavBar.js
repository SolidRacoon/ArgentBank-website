// NavBar
import './styles.css';
import React from 'react';

const NavBar = () => (
  <nav className="main-nav">
    <a className="main-nav-logo">
      <img
        className="main-nav-logo-image"
        src={process.env.PUBLIC_URL + '/img/argentBankLogo.png'}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </a>
    <div>
      <a className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </a>
    </div>
  </nav>
);

export default NavBar;
