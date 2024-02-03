//App
import React, { useState } from "react";
import { Link } from "react-router-dom";

//Component
import FloatingLabelInput from "../Reusables/FloatingLabelInput";
import { Button } from "../Reusables/Button";

//Style

import "./SinginPanel.css";

const SinginPanel = () => {
  const [button] = useState(true);

  return (
    <div className="sgn-main-container">
      <img src="assets/Component 2.png" alt="pills" className="image-3" />
      <div className="sgn-container">
        <h3>Welcome to TropicMed</h3>
        <h4>Enter your Credentials to Access an account</h4>
        <FloatingLabelInput
          label="Email address"
          type="email"
          name="Email address"
        />
        <FloatingLabelInput label="Password" type="password" name="Password" />
        <div className="sgn-button">
          {button && (
            <Button buttonStyle="btn--primary" buttonSize="btn--medium">
              Sign In
            </Button>
          )}
        </div>
        <div className="sgn-forgot">
          <Link className="signin" to="/sign-in">
            Forgot Password?
          </Link>
        </div>
        <div className="sgn-validate">
          <input type="checkbox" />
          <p>Remeber for 30 days</p>
        </div>
        <div className="cuser-redirect">
          Don't have an account?{" "}
          <Link className="signup" to="/reg-select">
            {" "}
            Sign Up
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
      </div>
    </div>
  );
};

export default SinginPanel;
