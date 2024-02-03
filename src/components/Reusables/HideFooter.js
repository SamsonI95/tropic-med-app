import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HideFooter = ({ children }) => {
  const [showFooter, setShowFooter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/home" || location.pathname === "/") {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  }, [location]);

  return (
    <div>{ showFooter && children }</div>
  );
};
export default HideFooter;
