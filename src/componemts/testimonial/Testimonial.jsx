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
                "My studies with Dr. Diri allowed me to improve my analytical
                and report writing skills. I also had the opportunity to learn
                about modeling, data analysis, and statistics using different
                software. And of course, I also learned a lot about project
                management."
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
                "I learn by working in a group with people from different
                countries. The lab classes and hands-on experience are very
                rewarding. We not only learn in the classroom, but we also learn
                in the field and in practice to better understand."
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
                "Studying across the country is an opportunity I would recommend
                to anyone! It is a very rich experience. I joined a quality
                training, in a cross-cultural class. I have always felt very
                supported. The Dr. Diri's teams have always been there to
                support me.".
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
