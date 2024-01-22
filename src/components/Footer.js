import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
function Footer() {
  return (
    <>
      <footer>
        <div className="content-1">
          <div className="logo-text-container">
            <img src="assets/Logo (1).png" alt="tm-logo" />
            <h3>TropicMed</h3>
          </div>
          <div className="copyright-tag">
            <span>
              <FontAwesomeIcon className="icon-s" icon={faCopyright} />
            </span>
            <p>Copyright 2022</p>
          </div>
        </div>
        <div className="content-2">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Featured Stories</a>
            </li>
            <li>
              <a href="/">Profile </a>
            </li>
            <li>
              <a href="/">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="content-3">
          <ul>
            <li>
              <a href="/">Pharmacy</a>
            </li>
            <li>
              <a href="/">Doctors Chat</a>
            </li>
            <li>
              <a href="/">Health Insurance</a>
            </li>
            <li>
              <a href="/">Test Labs</a>
            </li>
          </ul>
        </div>
        <div className="content-4">
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            <li>
              <a href="/">Referal</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="content-5">
          <h3>Social media</h3>
          <div className="social-icons">
            <span>
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span>
              <FontAwesomeIcon icon={faXTwitter} />
            </span>
          </div>
          <div className="contact-links">
            <ul>
              <li>
                <a href="/">Info@blockpegcapital.co</a>
              </li>
              <li>
                <a href="/">Info@blockpegcapital.co</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
