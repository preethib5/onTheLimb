import React from "react";
import facebook from "../../assets/icons/Icon-facebook.svg";
import instagram from "../../assets/icons/Icon-instagram.svg";
import twitter from "../../assets/icons/Icon-twitter.svg";
import "../Footer/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <div className="footer__container">
          <h3 className="footer__container--title">On The Limb </h3>
          <p className="footer__container--tag">-Stress Relief </p>
        </div>
        <h3 className="footer__header"> Get In Touch</h3>
        <div className="footer__social-links">
          {/* <a href="https://www.instagram.com/"></a> */}
          <img
            className="footer__social-links--img"
            alt="instagram"
            src={instagram}
          />
          <img
            className="footer__social-links--img"
            alt="facebook"
            src={facebook}
          />
          <img className="footer__social-links--img" src={twitter} />
        </div>
      </div>
    </footer>
  );
}
