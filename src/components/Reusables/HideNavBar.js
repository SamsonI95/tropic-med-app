import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HideNavBar = ({children}) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/home" || location.pathname === "/" || location.pathname === "/user") {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [location]);

  return (
    <div>{ showNavbar && children }</div>
  );
};

export default HideNavBar;
