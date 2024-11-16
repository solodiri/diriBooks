import React, { useEffect, useState } from "react";
import "./detailPage.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { bestBookData } from "../../../src/data";

const DetailPage = () => {
  const { id } = useParams();
  const [bookList, setBookList] = useState("Good");
  useEffect(() => {
    const newBook = bestBookData.find((book) => book.id === parseInt(id));
    setBookList(newBook);
  }, []);

  return (
    <div className=" detailPage">
      <div className="detailPageContainer">
        <div className="detailPageLeft">
          <h2>
            <strong style={{ color: "blue" }}> Title: </strong>
            {bookList.title}
          </h2>
          <h3>
            {" "}
            <strong style={{ color: "blue" }}> Author: </strong>
            {bookList.author}
          </h3>
          <div className="detailPageRight">
            <div>
              <img
                style={{ width: "300px" }}
                className="imageBox"
                src={bookList.image}
                alt="image"
              />
            </div>
          </div>
          <h3>
            <strong style={{ color: "blue" }}> Sub-Title: </strong>
            {bookList.subTitle}
          </h3>
          {/* style={{ fontSize: "17px" }} */}
          <p style={{ fontSize: "20px", lineHeight: "26px" }}>
            <strong style={{ color: "blue" }}> Description: </strong>
            {bookList.description}
          </p>
        </div>
      </div>
      <div strong style={{ textAlign: "center" }} className="detailBtn">
        <Link to="/">
          <button className="mainItemBtn homeDetailBtn">Back Home</button>
        </Link>
        <button className="mainItemBtn ">Buy Now</button>
      </div>
    </div>
  );
};
export default DetailPage;
