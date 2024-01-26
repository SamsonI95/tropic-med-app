//App
import React, { useState } from "react";
import { Link } from "react-router-dom";

//Component
import FloatingLabelInput from "../Reusables/FloatingLabelInput";
import { Button } from "../Reusables/Button";

//Style
import "./DoctorReg.css";

const CustomerReg = () => {
  const [button] = useState(true);

  return (
    <div className="docreg-main-container">
      <img src="assets/Rectangle 105.png" alt="doc-smile" className="image-1" />
      <div className="docreg-container">
        <h3>Welcome to TropicMed</h3>
        <h4>Enter your Credentials to Register an account</h4>
        <FloatingLabelInput label="First Name" type="name" name="Username" />
        <FloatingLabelInput label="Last Name" type="name" name="Username" />
        <FloatingLabelInput
          label="Specialization"
          type="text"
          name="Specialization"
        />
        <FloatingLabelInput
          label="Licence Authority"
          type="text"
          name="Licence Authority"
        />
        <FloatingLabelInput
          label="Licence Number"
          type="text"
          name="Licence Number"
        />
        <FloatingLabelInput
          label="Phone Number"
          type="phone"
          name="Phone Number"
        />
        <FloatingLabelInput
          label="Email address"
          type="email"
          name="Email address"
        />
        <FloatingLabelInput label="Password" type="password" name="Password" />
        <FloatingLabelInput
          label="Confirm Password"
          type="password"
          name="Confirm Password"
        />
        <div className="validate">
          <input type="checkbox" />
          <p>
            I Agree to the{" "}
            <Link className="terms" to="/terms">
              Terms and Conditions
            </Link>
          </p>
        </div>
        <div className="docreg-button">
          {button && (
            <Button buttonStyle="btn--primary" buttonSize="btn--medium">
              Register
            </Button>
          )}
        </div>
        <div className="duser-redirect">
          Already have an account?{" "}
          <Link className="signin" to="/sign-in">
            {" "}
            Verify
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

export default CustomerReg;
