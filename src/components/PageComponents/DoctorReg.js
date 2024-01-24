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
        <FloatingLabelInput label="Username" type="name" name="First Name" />
        <FloatingLabelInput label="Username" type="name" name="Last Name" />
        <FloatingLabelInput
          label="Specialization"
          type="text"
          name="Specialization"
        />
        <FloatingLabelInput
          label="licence-authority"
          type="text"
          name="Licence Authority"
        />
        <FloatingLabelInput
          label="licence-number"
          type="number"
          name="Licence Number"
        />
        <FloatingLabelInput label="phone" type="phone" name="Phone Number" />
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
        <div className="user-redirect">
          Already have an account?{" "}
          <Link className="signin" to="/sign-in">
            {" "}
            Verify
          </Link>
        </div>
        <div className="social-reg"></div>
      </div>
    </div>
  );
};

export default CustomerReg;
