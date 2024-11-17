import React, { useState } from "react";
import "./bookCard.css";
import { bestBookData } from "../../../src/data";
import { Link } from "react-router-dom";

const BookCard = () => {
  // const arr = ["white", "red", "yelloe", "blue", "green"];
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="searchBoxContainer">
        <div className="nav-searchBox">
          <input
            type="text"
            placeholder="Search books..."
            // value="searchTerm"
            value={searchTerm}
            // name={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <p
            onClick={() => {
              console.log("Good");
            }}
          >
            🔍
          </p>
        </div>
        <div>
          {bestBookData
            .filter((val) => {
              if (searchTerm == "") {
                return;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((book) => {
              const { id, title } = book;
              return (
                <div key={id} className="hove">
                  <Link to={`/detailPage/${id}`}>
                    <h3>{title}</h3>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>

      <div className="cardCardContainer">
        {bestBookData.map((book) => {
          const { id, image, author, title, url } = book;
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
                  <strong style={{ color: "blueviolet" }}> Title: </strong>
                  {title}
                </h4>

                <div className="cardItemBoxBtn">
                  <Link target="_blank" to={url}>
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
    </>
  );
};

export default BookCard;
