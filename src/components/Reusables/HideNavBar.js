import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HideNavBar = ({children}) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!setShowNavbar) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return (
    <div>{ showNavbar && children }</div>
  );
};

export default HideNavBar;
