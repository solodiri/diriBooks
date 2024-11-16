import React from "react";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className=" testimonial">
      <h1>International Students Testimonials </h1>
      <div className="coverTestimonial">
        <div className="testimonialContainer">
          <div className="testimonialTop">
            <div className="testimonialCard">
              <img
                className="testimonialimageBox"
                src="/brazil.jpg"
                alt="image"
              />
              <h3>
                <strong style={{ color: "blueviolet" }}> Name: </strong>Suraja
                Moltin
              </h3>
              <p className="testimonialStatus">
                "Social media such as Facebook, Twitter, Instagram, Messenger,
                Telegram, WhatsApp among others serve as economy front for
                individuals. These platforms have served as markets place of
                idea and creativity. Products and services are bought and sold
                on these platforms, thus providing opportunities for start-ups
                to commence business on a small scale?.
              </p>
              <p>
                <strong style={{ color: "blueviolet" }}> From: </strong>Belgian
              </p>
            </div>
            <div className="testimonialCard">
              <img
                className="testimonialimageBox"
                src="/nigeria.jpg"
                alt="image"
              />
              <h3>
                <strong style={{ color: "blueviolet" }}> Name: </strong>Adetutu
                Ademola
              </h3>
              <p className="testimonialStatus">
                "Dr. Diri works towards these goals by engaging our students
                fully in their education with extensive hands-on experience,
                professional immersion for substantial networking opportunities,
                and active learning pedagogy to refine critical thinking.".
              </p>
              <p>
                <strong style={{ color: "blueviolet" }}> From: </strong>Nigeria
              </p>
            </div>
            <div className="testimonialCard">
              <img
                className="testimonialimageBox"
                src="/belgian.jpg"
                alt="image"
              />
              <h3>
                <strong style={{ color: "blueviolet" }}> Name: </strong>Linda
                Greelandar
              </h3>
              <p className="testimonialStatus">
                "Social media such as Facebook, Twitter, Instagram, Messenger,
                Telegram, WhatsApp among others serve as economy front for
                individuals. These platforms have served as markets place of
                idea and creativity. Products and services are bought and sold
                on these platforms, thus providing opportunities for start-ups
                to commence business on a small scale".
              </p>
              <p>
                <strong style={{ color: "blueviolet" }}> From: </strong>USA
              </p>
            </div>
            <div className="testimonialCard">
              <img className="testimonialimageBox" src="/usa.jpg" alt="image" />
              <h3>
                <strong style={{ color: "blueviolet" }}> Name: </strong>Shania
                White
              </h3>
              <p className="testimonialStatus">
                "Social media such as Facebook, Twitter, Instagram, Messenger,
                Telegram, WhatsApp among others serve as economy front for
                individuals. These platforms have served as markets place of
                idea and creativity. Products and services are bought and sold
                on these platforms, thus providing opportunities for start-ups
                to commence business on a small scale".
              </p>
              <p>
                <strong style={{ color: "blueviolet" }}> From: </strong>Uk
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
