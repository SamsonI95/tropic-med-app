//App
import React, { useState } from "react";
import { Link } from "react-router-dom";

//Component
import FloatingLabelInput from "../Reusables/FloatingLabelInput";
import { Button } from "../Reusables/Button";

//Style
import "./OrgReg.css";

const OrgReg = () => {
  const [button] = useState(true);

  return (
    <div className="orgreg-main-container">
      <img src="assets/Rectangle 106.png" alt="org-smile" className="image-1" />
      <div className="orgreg-container">
        <h3>Service Providers</h3>
        <h4>Enter your details to complete registration</h4>
        <FloatingLabelInput
          label="Business Name"
          type="name"
          name="Business Name"
        />
        <FloatingLabelInput
          label="Business Address"
          type="name"
          name="Business Address"
        />
        <FloatingLabelInput
          label="Business Email"
          type="text"
          name="Business Email"
        />
        <FloatingLabelInput
          label="Business Type"
          type="text"
          name="Business Type"
        />
        <FloatingLabelInput
          label="CAC Number"
          type="text"
          name="CAC Number"
        />
        <FloatingLabelInput
          label="TIN Number"
          type="phone"
          name="TIN Number"
        />
        <FloatingLabelInput
          label="Password"
          type="password"
          name="Password"
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
        <div className="orgreg-button">
          {button && (
            <Button buttonStyle="btn--primary" buttonSize="btn--medium">
              Register
            </Button>
          )}
        </div>
        <div className="ouser-redirect">
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

export default OrgReg;
