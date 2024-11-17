import React, { useState } from "react";
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

      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/bookPage">
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
    </nav>
  );
};

export default NavBar;
