//App
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

//Component

import { Button } from "../Reusables/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

//Style
import "./CustomerrReg.css";

const CustomerReg = () => {
  const [button] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  //Form Validation
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  const validateEmail = () => {
    setEmailValid(email !== "");
  };

  const validatePassword = () => {
    setPasswordValid(password.length >= 6);
  };

  const validateConfirmPassword = () => {
    setConfirmPasswordValid(confirmPassword === password);
  };

  const navigate = useNavigate();

  const signin = () => {
    navigate("/signin");
  };

  //handle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  //Form submission logic
  const register = async (e) => {
    e.preventDefault();

    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);

      // Handle successful registration
      console.log("User added successfully!");
      alert("User added successfully!");
    } catch (error) {
      // Handle errors
      console.error("Error adding user:", error.message);
    }

    // Validate inputs before submitting
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    if (emailValid && passwordValid && confirmPasswordValid) {
      // Perform registration logic here
      console.log("Registration successful");
    } else {
      // Validation failed
      console.log("Registration failed. Please check your inputs.");
    }
  };

  //Close form filled
  const handleCloseForm = () => {
    navigate("/reg-select");
  };

  return (
    <div className="creg-main-container">
      <img src="assets/Rectangle 104.png" alt="doc-smile" className="image-1" />
      <form className="creg-container" onSubmit={register}>
        <div className="form-close">
          <FontAwesomeIcon icon={faTimes} onClick={handleCloseForm} />
        </div>
        <h3>Welcome to TropicMed</h3>
        <h4>Enter your Credentials to Register an account</h4>

        <div
          className={`floating-input-container ${emailValid ? "" : "invalid"}`}
        >
          <input
            className="floating-input"
            placeholder="Email Address"
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailValid(true); // Reset validation on input change
            }}
            onBlur={validateEmail}
          />
          <label className="form-label">Email</label>
        </div>

        <div
          className={`floating-input-container ${
            passwordValid ? "" : "invalid"
          }`}
        >
          <input
            className="floating-input"
            placeholder="Password"
            type={passwordVisible ? "text" : "password"}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordValid(true);
            }}
          />
          <label className="form-label">Password</label>
          <button
            type="button"
            className="password-visibility-toggle"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
          </button>
        </div>

        <div
          className={`floating-input-container ${
            confirmPasswordValid ? "" : "invalid"
          }`}
        >
          <input
            className="floating-input"
            placeholder="Confirm Password"
            type={passwordVisible ? "text" : "password"}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordValid(true);
            }}
          />
          <label className="form-label">Confirm Password</label>
        </div>
        <div className="creg-button">
          {button && (
            <Button buttonStyle="btn--primary" buttonSize="btn--medium">
              Register
            </Button>
          )}
        </div>
        <div className="cuser-redirect">
          Already have an account?{" "}
          <Link className="signin" to="/signin">
            <Button
              buttonStyle="btn--noutline1"
              buttonSize="btn--none"
              onClick={signin}
            >
              {" "}
              Sign in
            </Button>
          </Link>
        </div>
        <div className="social-reg">
          {button && (
            <Button buttonStyle="btn--outline" buttonSize="btn--social">
              <img src="assets/icons8-google-24.png" alt="google-icon" />
              Sign in with Google
            </Button>
          )}
          {button && (
            <Button buttonStyle="btn--outline" buttonSize="btn--social">
              <img src="assets/icons8-apple-logo-24.png" alt="apple-icon" />
              Sign in with Apple
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CustomerReg;
