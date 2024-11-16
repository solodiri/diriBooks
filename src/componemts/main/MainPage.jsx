import React from "react";
import "./main.css";
import BookCard from "../bookcard/BookCard";
import Favoirte from "../favorite/Favoirte";
import Subscription from "../subscription/Subscription";
import Testimonial from "../testimonial/Testimonial";

const main = () => {
  const favoriteTitles = "Favorite Books";
  return (
    <div className="main">
      <div className="mainPage">
        <div>
          <div className="mainTitle">
            <h2>Best Seller Books</h2>
          </div>
          <BookCard />
          <div className="mainTitle">
            <h2>{favoriteTitles}</h2>
            <Favoirte />
            {/* <BookCard /> */}
            <Testimonial />
            <Subscription />
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
