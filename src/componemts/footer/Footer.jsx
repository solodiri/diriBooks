import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerLogoImg">
          <img className="footer-logo-img" src="/drdiri.png" alt="" />
          <Link to="/">
            <h2 className="footerLogo">DrDiriBooks</h2>
          </Link>
        </div>
        <div className="footerContent">
          <div className="footerLinks">
            <h4> LOCATION LINKS</h4>
            <h3>
              <strong style={{ color: "white" }}> Phone No.: </strong>
              +234 803 551 1278
            </h3>
            <h3>
              <strong style={{ color: "white" }}> Email: </strong>
              drchrisdiri@gmail.com
            </h3>
            <h3>
              <strong style={{ color: "white" }}> Address: </strong>
              Federal University Otuoke
            </h3>
            <h3>
              <strong style={{ color: "white" }}> City: </strong>
              Yenagoa
            </h3>
            <h3>
              <strong style={{ color: "white" }}> State: </strong>
              Bayelsa State
            </h3>
            <h3>
              <strong style={{ color: "white" }}> Country: </strong>
              Nigeria
            </h3>
          </div>
          <div className="footerLinks">
            <h4> MENU LINKS</h4>
            <ul>
              <Link to="/">
                <li className="footerLink">Back Home</li>
              </Link>
              <Link to="/about">
                <li className="footerLink">About</li>
              </Link>
              <Link to="/">
                <li className="footerLink">Books</li>
              </Link>
              <Link to="/services">
                <li className="footerLink">Services</li>
              </Link>
              <Link to="/contact">
                <li className="footerLink">Contact</li>
              </Link>
            </ul>
          </div>
          <div className="footerLinks">
            <h4> SOCIAL LINKS</h4>
            <ul>
              <Link
                target="_blank"
                to="https://www.facebook.com/chris.diri?mibextid=ZbWKwL"
              >
                <li className="footerLink">FaceBook</li>
              </Link>
              <Link
                target="_blank"
                to="https://scholar.google.com/citations?user=4xZKjC4AAAAJ&hl=en&oi=ao#d=gsc_md_fol&t=1731604537028"
              >
                <li className="footerLink">Googlescholar</li>
              </Link>
              <Link target="_blank" to="https://gumroad.com">
                <li className="footerLink">Gumroad</li>
              </Link>
              <Link
                target="_blank"
                to="https://www.researchgate.net/profile/Christian-Diri/research"
              >
                <li className="footerLink">Researchgate</li>
              </Link>

              <Link
                target="_blank"
                to="https://www.linkedin.com/in/dr-christian-tuotamuno-diri-ba6353134?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <li className="footerLink">LinkedIn</li>
              </Link>

              <Link
                target="_blank"
                to="https://api.whatsapp.com/send/?phone=%2B2348035511278&text&type=phone_number&app_absent=0"
              >
                <li className="footerLink">WhatsApp</li>
              </Link>
              <Link target="_blank" to="Https://t.me/Dr.Chris ">
                <li className="footerLink">Telegram</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <h4 className="footerCopyRight">
        Copyright © 2014-{date} Federal University Otuoke. All rights reserved.
        (Powered by Engr. Diri Sollos +234 803 750 3775)
      </h4>
    </div>
  );
};
const date = new Date().getFullYear();

export default Footer;
