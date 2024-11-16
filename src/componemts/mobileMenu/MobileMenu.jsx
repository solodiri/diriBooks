import React from "react";
import "./mobileMenu.css";
import { Link } from "react-router-dom";

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }) => {
  return (
    <div
      className="mobileMenu"
      onClick={() => {
        setShowMobileMenu(!showMobileMenu);
      }}
    >
      <div className="mobileMenuContent">
        <ul className="mobileLinks">
          {/* <li className="mobileLink">Home</li>
          <li className="mobileLink">About</li>
          <li className="mobileLink">Books</li>
          <li className="mobileLink">Services</li>
          <li className="mobileLink">Contact</li> */}

          <Link to="/">
            <li
              className="mobileLink"
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
              }}
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              className="mobileLink"
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
              }}
            >
              About
            </li>
          </Link>
          <Link to="/">
            <li
              className="mobileLink"
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
              }}
            >
              Books
            </li>
          </Link>
          <Link to="/services">
            <li
              className="mobileLink"
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
              }}
            >
              Services
            </li>
          </Link>
          <Link to="/contact">
            <li
              className="mobileLink"
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
              }}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
