import React from "react";
import "./hero.css";

const hero = () => {
  return (
    <div className=" hero">
      <div className="heroContainer">
        <div className="heroLeft">
          <h1>
            Welcome to{" "}
            <strong style={{ color: "goldenrod", fontSize: "40px" }}>
              Dr Diri's
            </strong>{" "}
            Book Store
          </h1>
          <h2>
            The place For{" "}
            <strong style={{ color: "goldenrod", fontSize: "30px" }}>
              Reflective Rejuvenation
            </strong>
          </h2>
        </div>

        <div className="heroRight">
          <div>
            <img className="imageBox" src="/reflective.png" alt="" />
          </div>
          {/* <img src="/study.jpg" alt="" /> */}
        </div>

        {/* <div className="webTime">
          <h2 className="timer">
            {timeLessH}:{timeLessM}:{timeLessS}
          </h2>
        </div> */}
      </div>
    </div>
  );
};
// const timeLessH = new Date().getHours();
// const timeLessM = new Date().getMinutes();
// const timeLessS = new Date().getSeconds();

export default hero;
