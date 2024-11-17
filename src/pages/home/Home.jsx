import React from "react";
import "./home.css";
import Hero from "../../componemts/hero/Hero";
import Shop from "../../componemts/shop/Shop";

const Home = () => {
  return (
    <div className=" home">
      <Hero />
      <Shop />
    </div>
  );
};

export default Home;
