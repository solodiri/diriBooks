import React from "react";
import "./bookPage.css";
import BookCard from "../../componemts/bookcard/BookCard";

const BookPage = () => {
  return (
    <div className="book">
      <h1 className="bookTitle">All Books</h1>
      <div className="bookContainer">
        <BookCard />
      </div>
    </div>
  );
};

export default BookPage;
