import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light;"
    //   style="background-color: #d2fdff"
    >
      <a className="navbar-brand" to="/home">
        Ashlyn Smith
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ml-auto">
            <Link className="nav-link" to="/home">
              About
            </Link>
          </li>
          <li className="nav-item ml-auto">
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item ml-auto">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
