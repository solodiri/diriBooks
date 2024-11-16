import React from "react";
import "./hamburger.css";

const Hamburger = ({ MenuSignToggle }) => {
  return (
    <div
      className="hamburger"
      onClick={() => {
        MenuSignToggle();
      }}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default Hamburger;
