import React from "react";
import "./bookCard.css";
import { bestBookData } from "../../../src/data";
import { Link } from "react-router-dom";

const BookCard = () => {
  return (
    <div className="mainCardContainer">
      {bestBookData.map((book) => {
        const { id, image, author, title, subTitle, description, url } = book;
        return (
          <div key={id} className="mainItemCard">
            <Link to={`/detailPage/${id}`}>
              <img className="mainImage" src={image} alt="image" />
            </Link>
            <div className="mainItemInfo">
              <h3>
                <strong style={{ color: "blueviolet" }}> Author: </strong>
                {author}
              </h3>
              <h4>
                <strong style={{ color: "blueviolet" }}> Title: </strong>{" "}
                {title}{" "}
              </h4>
              {/* <h3>Sub-Title:{subTitle} </h3> */}
              {/* <p> Description:{description} </p> */}
              <div className="mainItemBoxBtn">
                {/* <Link to={`/detailPage/${id}`}> */}
                <Link to={url}>
                  <button className="mainItemBtn ">Buy Now</button>
                </Link>
                <Link to={`/detailPage/${id}`}>
                  <button className="mainItemBtn greenBtn">Read More</button>
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
