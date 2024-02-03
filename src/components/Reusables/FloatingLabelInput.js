import React, { useState } from "react";
import "./FloatingLabelInput.css"; 

const FloatingLabelInput = ({ label, ...inputProps }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      className={`floating-label-input ${
        isFocused || inputValue ? "active" : ""
      }`}
    >
      <label className="label">{label}</label>
      <input
        {...inputProps}
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className="input"
      />
    </div>
  );
};

export default FloatingLabelInput;
