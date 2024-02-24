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

//Style
import "./CustomerrReg.css";

const CustomerReg = () => {
  const [button] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  //Password Validation

  /*// Check if passwords match
  if (password !== confirmPassword) {
    console.error("Passwords do not match");
    // Handle the mismatch (e.g., display an error message to the user)
    return;
  }*/

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
  };

  return (
    <div className="creg-main-container">
      <img src="assets/Rectangle 104.png" alt="doc-smile" className="image-1" />
      <form className="creg-container" onSubmit={register}>
        <h3>Welcome to TropicMed</h3>
        <h4>Enter your Credentials to Register an account</h4>

        <div className="floating-input-container">
          <input
            id="email"
            className={`floating-input ${email ? "focused" : ""}`}
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="floating-input-container">
          <input
            id="password"
            className={`floating-input password ${password ? "focused" : ""}`}
            placeholder="Password"
            type={passwordVisible ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="password-visibility-toggle"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
          </button>
        </div>

        <div className="floating-input-container">
          <input
            id="confirmPassword"
            className={`floating-input cpassword ${
              confirmPassword ? "focused" : ""
            }`}
            placeholder="Confirm Password"
            type={passwordVisible ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
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
            <Button buttonStyle="btn--noutline1" buttonSize="btn--none" onClick={signin}> Sign in</Button>
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
