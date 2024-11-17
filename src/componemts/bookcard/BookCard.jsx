import React from "react";
import "./bookCard.css";
import { bestBookData } from "../../../src/data";
import { Link } from "react-router-dom";

const BookCard = () => {
  // console.log(bestBookData.length);
  return (
    <div className="cardCardContainer">
      {bestBookData.map((book) => {
        const { id, image, author, title, subTitle, description, url } = book;
        return (
          <div key={id} className="cardItemCard">
            <Link to={`/detailPage/${id}`}>
              <img className="cardImage" src={image} alt="image" />
            </Link>
            <div className="cardItemInfo">
              <h3>
                <strong style={{ color: "blueviolet" }}> Author: </strong>
                {author}
              </h3>
              <h4>
                <strong style={{ color: "blueviolet" }}> Title: </strong>{" "}
                {title}{" "}
              </h4>

              <div className="cardItemBoxBtn">
                {/* <Link to={`/detailPage/${id}`}> */}
                <Link to={url}>
                  <button className="cardItemBtn ">Buy Now</button>
                </Link>
                <Link to={`/detailPage/${id}`}>
                  <button className="cardItemBtn greenBtn">Read More</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookCard;
