import React, { useEffect, useState } from "react";
import "./detailPage.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { bestBookData } from "../../../src/data";

const DetailPage = () => {
  const [bookList, setBookList] = useState("Good");
  const { id } = useParams();
  useEffect(() => {
    const newBook = bestBookData.find(
      (book) => book.id === Number(id.toString())
    );
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
          <p
            style={{
              fontSize: "16px",
              lineHeight: "26px",
              color: "rgb(94, 87, 87)",
            }}
          >
            <strong style={{ color: "blue" }}> Description: </strong>
            {bookList.description}
          </p>
        </div>
      </div>

      <div className="detailBtn">
        <Link to="/">
          <button className="cardItemBtn cardDetailBtn">Back Home</button>
        </Link>
        <button className="cardItemBtn greenBtn ">Buy Now</button>
      </div>
    </div>
  );
};
export default DetailPage;
