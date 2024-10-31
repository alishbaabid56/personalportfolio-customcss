import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-heading">Connect with Me</h3>
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/alishba-abid-67606b2b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/alishbaabid56"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/your-facebook-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Alishba Abid. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;