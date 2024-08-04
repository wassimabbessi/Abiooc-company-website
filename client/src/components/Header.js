import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../helpers/auth';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  let navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);

  const handleLogout = (evt) => {
    logout(() => {
      navigate('/signin');
    });
  };

  // views
  const showNavigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
      <Link to="/" className="navbar-brand logo-animation">
        <img src={require('./Navlogo3.png')} width="160" height="60" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          {!isAuthenticated() && (
            <Fragment>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="far fa-address-book	-About"></i> About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <i className="fas fa-envelope-open		"></i> Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Production" className="nav-link">
                  <i className="fas fa-clipboard-list			"></i> Production
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/privatelabel" className="nav-link">
                  <i className="fas fa-barcode	"></i> privatelabel
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ourland" className="nav-link">
                  <i className="fas fa-map-marked-alt	"></i> Our land
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/News" className="nav-link">
                  <i className="far fa-bell	"></i> News
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/shop" className="nav-link">
                  <i className="fas fa-shopping-bag"></i> Shop
                </Link>
              </li>
              <li className="nav-item mr-2" style={{ position: 'relative' }}>
                <Link to="/cart" className="nav-link">
                  <i className="fas fa-shopping-cart"></i> Cart{' '}
                  <span
                    className="badge badge-danger"
                    style={{
                      position: 'absolute',
                      top: '0px',
                    }}
                  >
                    {cart.length}
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  <i className="fas fa-edit"></i> Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link">
                  <i className="fas fa-sign-in-alt"></i> Signin
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && isAuthenticated().role === 0 && (
            <Fragment>
              <li className="nav-item">
                <Link to="/user/dashboard" className="nav-link">
                  <i className="fas fa-user-cog"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">
                  <i className="fas fa-shopping-bag"></i> Shop
                </Link>
              </li>
              <li className="nav-item mr-2" style={{ position: 'relative' }}>
                <Link to="/cart" className="nav-link">
                  <i className="fas fa-shopping-cart"></i> Cart{' '}
                  <span
                    className="badge badge-danger"
                    style={{
                      position: 'absolute',
                      top: '0px',
                    }}
                  >
                    {cart.length}
                  </span>
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && isAuthenticated().role === 1 && (
            <Fragment>
              <li className="nav-item">
                <Link to="/admin/dashboard" className="nav-link">
                  <i className="fas fa-user-cog"></i> Dashboard
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && (
            <Fragment>
              <li className="nav-item">
                <button
                  className="btn btn-link text-secondary text-decoration-none pl-0"
                  onClick={handleLogout}
                >
                  <i className="fas fa-sign-out-alt"></i> Logout
                </button>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );

  // render
  return <header id="header">{showNavigation()}</header>;
};

export default Header;
