import React from "react";
import "./favorite.css";
import { Link } from "react-router-dom";

const Favoirte = () => {
  return (
    <div className=" favorite">
      <div className="favoriteContainer">
        <div className="favoriteRight">
          <div>
            <img className="imageBox" src="/study.jpg" alt="image" />
          </div>
        </div>
        <div className="favoriteLeft">
          <h1>Find your Favorite Books here</h1>
          <p className="status">
            Social media such as Facebook, Twitter, Instagram, Messenger,
            Telegram, WhatsApp among others serve as economy front for
            individuals. These platforms have served as markets place of idea
            and creativity. Products and services are bought and sold on these
            platforms, thus providing opportunities for start-ups to commence
            business on a small scale.
          </p>
          <div className="statisties">
            <div className="stat">
              <h3>180+</h3>
              <p>Book Listing</p>
            </div>
            <div className="stat">
              <h3>4800+</h3>
              <p>Readers</p>
            </div>
            <div className="stat">
              <h3>2800+</h3>
              <p>Pdf Download </p>
            </div>
          </div>
          <Link to="https://scholar.google.com/citations?user=4xZKjC4AAAAJ&hl=en&oi=ao">
            <button className="cardItemBtn">Explore Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Favoirte;
