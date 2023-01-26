import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-content">
        <h1 className="logo">LOGO ©</h1>
        <div className="footer-terms">
            <h4>Terms and conditions</h4>
            <h4>·</h4>
            <h4>Privacy Policy</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
