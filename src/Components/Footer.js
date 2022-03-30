import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <img
        src="/SniperCodewellChallenge/Assets/Logo.svg"
        alt=""
        className="img-logo"
      />
      <div className="footer-copyright">
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
