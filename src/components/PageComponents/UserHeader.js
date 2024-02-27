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
          <button className="header-buttons">
            <Link to="">Pharmacy/Drugs</Link>
          </button>
          <button className="header-buttons">
            <Link to="">text</Link>
          </button>
          <button className="header-buttons">
            <Link to="">text</Link>
          </button>
          <button className="header-buttons">
            <Link to="">text</Link>
          </button>
          <button className="header-buttons">
            <Link to="">text</Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default UserHeader;
