import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Hamburger from "../hamburger/Hamburger";

const NavBar = ({ MenuSignToggle }) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="nav-logo">
          <img src="/drdiri.png" alt="" />
          <h3>DrDiriBooks</h3>
        </div>
      </Link>
      <div className="nav-searchBox">
        <input type="text" placeholder="Search Here" />
        <p>🔍</p>
      </div>

      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/">
            <li>Books</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      <Hamburger MenuSignToggle={MenuSignToggle} />

      {/* <div
        className="bars"
        onClick={() => {
          MenuSignToggle();
        }}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div> */}
    </nav>
  );
};

export default NavBar;