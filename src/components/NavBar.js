import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { SidebarData } from "./SidebarData";
import './NavBar.css'
function NavBar() {
  const [button, setButton] = useState(true);

  //hamburger icon
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Link to="/" className="navbar-logo-text">
        <span className="tropic">Tropic</span>
        <span className="med">Med</span>
      </Link>
      <div className="hamburger-icon" onClick={showSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <a className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25 50C38.8071 50 50 39.4605 50 26.4595C50 25.9287 49.9813 25.402 49.9446 24.88C49.737 24.9255 49.5213 24.9495 49.3 24.9495H45.0503C43.3934 24.9495 42.0503 26.2926 42.0503 27.9495V33.2523C42.0503 34.9092 40.7071 36.2523 39.0503 36.2523H35.9241C34.2673 36.2523 32.9241 34.9092 32.9241 33.2523V27.9495C32.9241 26.2926 31.581 24.9495 29.9241 24.9495H25.3C23.6431 24.9495 22.3 23.6063 22.3 21.9495V20.6328C22.3 18.9759 23.6431 17.6328 25.3 17.6328H29.9241C31.581 17.6328 32.9241 16.2896 32.9241 14.6328V11.0038C32.9241 9.3469 34.2673 8.00375 35.9241 8.00375H39.0503C40.7071 8.00375 42.0503 9.3469 42.0503 11.0038V14.6328C42.0503 16.2896 43.3934 17.6328 45.0503 17.6328H48.1832C44.4748 9.00518 35.4922 2.91901 25 2.91901C11.1929 2.91901 0 13.4584 0 26.4595C0 39.4605 11.1929 50 25 50Z"
            fill="#1BC576"
          />
          <rect
            x="41.6"
            width="8.4"
            height="8.56874"
            rx="2.25"
            fill="#FF6B00"
          />
        </svg>
      </a>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <i className="fas fa-times" onClick={showSidebar}></i>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="navbar-rightSide">
        {button && (
          <Button buttonStyle="btn--noutline" buttonSize="btn--sl">
            Register
          </Button>
        )}
        {button && (
          <Button buttonStyle="btn--primary" buttonSize="btn--small">
            Sign In
          </Button>
        )}
      </div>
    </>
  );
}

export default NavBar;
