//App
import React, { useState } from "react";
import { Link } from "react-router-dom";

//Component
import FloatingLabelInput from "../Reusables/FloatingLabelInput";
import { Button } from "../Reusables/Button";

//Style
import "./CustomerrReg.css";

const CustomerReg = () => {
  const [button] = useState(true);

  return (
    <div className="creg-main-container">
      <img src="assets/Rectangle 104.png" alt="doc-smile" className="image-1" />
      <div className="creg-container">
        <h3>Welcome to TropicMed</h3>
        <h4>Enter your Credentials to Register an account</h4>
        <FloatingLabelInput
          label="Username"
          type="email"
          name="Email address"
        />
        <FloatingLabelInput label="Password" type="password" name="Password" />
        <FloatingLabelInput
          label="Password"
          type="password"
          name="Confirm Password"
        />
        <div className="creg-button">
          {button && (
            <Button buttonStyle="btn--primary" buttonSize="btn--medium">
              Register
            </Button>
          )}
        </div>
        <div className="user-redirect">
          Already have an account?{" "}
          <Link className="signin" to="/sign-in">
            {" "}
            Sign in
          </Link>
        </div>
        <div className="social-reg"></div>
      </div>
    </div>
  );
};

export default CustomerReg;
