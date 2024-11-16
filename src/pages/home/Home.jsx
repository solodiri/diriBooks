import React from "react";
import "./home.css";
import Hero from "../../componemts/hero/Hero";
import MainPage from "../../componemts/main/MainPage";

const Home = () => {
  return (
    <div className=" home">
      <Hero />
      <MainPage />
    </div>
  );
};

export default Home;
