import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--noutline", "btn--noutline1", "btn--secondary"];
const SIZES = ["btn--none", "btn--small", "btn--sl", "btn--social", "btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
  );
};
