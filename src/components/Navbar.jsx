import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
           <img src="assets/logo.png" className="img-fluid"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Learn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Pricing
                </a>
              </li>
            </ul>
            <div className="header-right">
            <ul className="navbar-nav me-auto align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link" href="#">
                Book A Demo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Sign In
                </a>
              </li>
              <li className="nav-item nav-btn">
                <a className="nav-link btn" href="#">
                Try For Free
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
