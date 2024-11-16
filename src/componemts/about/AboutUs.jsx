import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className=" about">
      <div className="aboutContainer">
        <div className="aboutRight">
          <div>
            <img className="imageBox" src="/diri.jpg" alt="image" />
          </div>
        </div>
        <div className="aboutLeft">
          <h1>About The Author</h1>

          <p>
            Dr. Christian Tuotamuno Diri had his Bachelor of Arts (B.A) Degree
            in Communication Arts, from the University of Uyo, and his Master of
            Arts (M.A) Degree and Doctor of Philosophy (Ph.D.) Degree in Mass
            Communication from the University of Nigeria, Nsukka. He has taught
            Communication and Media Studies in Private and State Universities
            and currently teaches the same in the Department of English and
            Communication Studies, Federal University Otuoke, Bayelsa State.
          </p>
          <p>
            He was the Editor-in-Chief of the Department’s Journal, Otuoke
            Language and Communication Review (OLACORE), Departmental
            Coordinator of the Students Industrial Work Experience Scheme
            (SIWES), Coordinator and Editorial Consultant to the Departmental
            Training Newspaper, FUOTIMES, amongst others.
          </p>
          <p>
            He consults in Media, Public Relations, Advertising, and allied
            areas.
          </p>
          <p>
            Dr. Diri has a bias for Development Communication, Strategic
            Communication, Literary Journalism, Advertising and Public
            Relations, Issues and Crises Communication, and Applied
            Communication, and is widely published in both local and
            international journals.
          </p>
          <p>
            He is a member of the following professional bodies: Nigeria
            Institute of Public Relations (NIPR), Institute of Mass
            Communication and Information Management of Nigeria (IMIM),
            Association of Communication Scholars and Practitioners of Nigeria
            (ACSPN), African Council for Communication Education (ACCE),
            Nigerian Council, and Association of Media and Communication
            Researchers of Nigeria (AMCRON).
          </p>

          <p>
            He is the immediate past Head of, the Department of English and
            Communication Studies, and current Sub-Dean, Faculty of Humanities,
            Federal University Otuoke, Bayelsa State. He is co-author of the
            book, ‘English for Communication Studies: A Pedagogical Text for
            Communication Studies Students and “Effective Communication
            Lessons:10 Lessons to A Sustainable Communicative Behavior”.
          </p>
          <div className="aboutLinks">
            <h4> SOCIAL LINKS</h4>
            <ul>
              <Link to="https://www.facebook.com/chris.diri?mibextid=ZbWKwL">
                <li className="aboutLink">FaceBook</li>
              </Link>
              <Link to="https://scholar.google.com/citations?user=4xZKjC4AAAAJ&hl=en&oi=ao#d=gsc_md_fol&t=1731604537028">
                <li className="aboutLink">Googlescholar</li>
              </Link>
              <Link to="https://gumroad.com">
                <li className="aboutLink">Gumroad</li>
              </Link>
              <Link to="https://www.researchgate.net/profile/Christian-Diri/research">
                <li className="aboutLink">Researchgate</li>
              </Link>
              {/* <Link to="https://instagram.com">
                <li className="aboutLink">Instagram</li>
              </Link> */}

              <Link to="https://www.linkedin.com/in/dr-christian-tuotamuno-diri-ba6353134?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <li className="aboutLink">LinkedIn</li>
              </Link>

              <Link to="https://api.whatsapp.com/send/?phone=%2B2348035511278&text&type=phone_number&app_absent=0">
                {/* <Link to="https://https://wa.me/+2348035511278?text="> */}
                <li className="aboutLink">WhatsApp</li>
              </Link>
              <Link to="Https://t.me/Dr.Chris ">
                <li className="aboutLink">Telegram</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
