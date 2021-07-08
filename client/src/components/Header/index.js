import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
  <header>
    <nav className="container">
      <div className="row">
        <div className="col-1 nav-padded">
          <div className="row"><a href="#"><i className="bi bi-facebook"></i></a></div>
          <div className="row"><a href="#"><i className="bi bi-twitter"></i></a></div>
          <div className="row"><a href="#"><i className="bi bi-instagram"></i></a></div>
        </div>
        <div className="col-10 nav-padded">
          <div className="row text-center">
            <h1>masterTicket</h1>
          </div>
          <div className="row d-flex justify-content-around text-center">
            <ul>
              <li><a href="/">home</a></li>
              <li><a href="/#featured">featured</a></li>
              <li><a href="/dashboard">dashboard</a></li>
              <li id="logout">logout</li>
              <li><a href="/login">login</a></li>
            </ul>
          </div>
        </div>
        <div className="col-1 nav-padded">
          <div className="row"><a href="#"><i className="bi bi-list"></i></a></div>
          <div className="row"><a href="#"><i className="bi bi-headphones"></i></a></div>
          <div className="row"><a href="#"><i className="bi bi-search"></i></a></div>
        </div>
      </div>
    </nav>
  </header>
  );
};

export default Header;
