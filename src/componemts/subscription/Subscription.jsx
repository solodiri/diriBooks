import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./subscription.css";

const Subscription = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [comment, setComment] = useState("");
  // const [message, setMessage] = useState([]);
  const [alert, setAlert] = useState(false);

  // const myError = "The connection is not extablished";
  const myError = "Something went wrong somewher";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ngkc88k",
        "template_xaauedo",
        form.current,
        "Zvsa1usBIBToHa8xp"
      )
      // .sendForm("service_ngkc88k", "template_xaauedo", form.current, {
      //   publickey: "Zvsa1usBIBToHa8xp",
      // })
      .then(
        (result) => {
          console.log("SUCCESS", result.text);
          setAlert(true);
          setTimeout(() => {
            setAlert(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILD...", error.text, myError);
        }
      );

    e.target.reset();
    // console.log("Name:", name, "Email:", email, "Comment:", comment);
    // const date = { name, email, comment };
    // if (name && email && comment) {
    //   console.log(" Somthing");
    //   setMessage((prev) => [...prev, date]);
    // } else {
    //   console.log(" Empty");
    // }

    // setName("");
    // setEmail("");
    // setComment("");
    // console.log(result);
  };
  return (
    <div className=" subscription">
      <div className="subscriptionContainer">
        <div className="subscriptionLeft">
          <div>
            <img className="imageBoxSub" src="/subscribe.webp" alt="image" />
          </div>
        </div>
        <div className="subscriptionRight">
          <h1>Subscribe and don't miss any updates! </h1>

          {alert === true && (
            <p
              className="warming"
              style={{
                backgroundColor: "orange",
                color: "white",
                padding: "10px",
                fontSize: "17px",
              }}
            >
              You Subscribe Successfuly
            </p>
          )}

          {/* {message?.map((item, index) => {
            return (
              <div key={index}>
                <li>{item.name}</li>
                <li>{item.email}</li>
                <li>{item.comment}</li>
              </div>
            );
          })} */}

          <form onSubmit={sendEmail} ref={form} action="">
            <input
              type="text"
              className="subscriptionInput"
              placeholder="Enter your Name"
              required
              // value={name}
              name="name"
              // onChange={(e) => {
              //   setName(e.target.value);
              // }}
            />
            <input
              type="email"
              className="subscriptionInput"
              placeholder="Enter your Email"
              required
              // value={email}
              name="email"
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
            />
            <input
              type="text"
              className="subscriptionInput"
              placeholder="Enter your Subject"
              required
              // value={subject}
              name="subject"
              // onChange={(e) => {
              //   setSubject(e.target.value);
              // }}
            />
            <textarea
              className="subscriptionTextarea"
              placeholder="Enter your Comment"
              required
              // value={comment}
              name="comment"
              // onChange={(e) => {
              //   setComment(e.target.value);
              // }}
            />
            <button type="submit" className="cardItemBtn subBtn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Subscription;
