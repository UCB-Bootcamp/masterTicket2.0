import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../auth';
const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
    <nav className="container">
      <div className="row">
        <div className="col-10 nav-padded m-auto ">
          <div className="row ">
            <Link to="/">
              <h1 className="">masterTicket2.0</h1>
            </Link>
          </div>
          <div className="row d-flex justify-content-around text-center">
          <Link to="/">Home</Link>
          <Link to="/featured">Featured</Link>
          {Auth.loggedIn() ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
          </div>
        </div>
      </div>
    </nav>
    </header>
  );
};
export default Header;