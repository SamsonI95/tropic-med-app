//App
import React from "react";
import { Link } from "react-router-dom";

//Style
import "./UserHeader.css";

const UserHeader = () => {
  return (
    <>
      <section className="header-container">
        <div className="header-wrapper">
          <Link to="/user/pharm-drug">
            <button className="header-buttons">
              <img
                src="\assets\medicine_pills_drugs_icon_149284 1.png"
                alt="drugs"
              />
              <h3>Pharmacy /Drugs</h3>
            </button>
          </Link>
          <Link to="/user/doc-chat">
            <button className="header-buttons">
              <img
                src="/svg/call_doctor_coronavirus_smartphone_icon_142163 50.svg"
                alt="doc"
              />
              <h3>Doctors Chat</h3>
            </button>
          </Link>
          <Link to="/user/test-labs">
            <button className="header-buttons">
              <img
                src="/svg/iconfinder-508-chemistry-lab-chemistry-lab-education-4212906_114963 1 50.svg"
                alt="lab"
              />
              <h3>Test<br/>Labs</h3>
            </button>
          </Link>
          <Link to="/user/dental-check">
            <button className="header-buttons">
              <img src="/assets/dental-checkup_3851949 2.png" alt="dental" />
              <h3>Dental Check</h3>
            </button>
          </Link>
          <Link to="">
            <button className="header-buttons">
              <img src="/assets/eye 2.png" alt="eye" />
              <h3>Eye<br/>Check</h3>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default UserHeader;
