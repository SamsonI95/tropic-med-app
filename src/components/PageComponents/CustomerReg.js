//App
import React, { useState } from "react";
import { Link } from "react-router-dom";

//Component
import FloatingLabelInput from "../Reusables/FloatingLabelInput";
import { Button } from "../Reusables/Button";

//Style
import "./CustomerrReg.css";

//TORY Firebase
import { addUser } from "../../firebase_service";

const CustomerReg = () => {
  const [button] = useState(true);


  //TORY backend
  const handleSubmit = async () => {
  try {
    await addUser(username, password);
    console.log("User added successfully!");
    // Handle successful registration (e.g., clear input fields, display a success message)
  } catch (error) {
    console.error("Error adding user:", error);
    // Handle errors appropriately (e.g., display error messages)
  }
};

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");


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
          onChange={(event) => setUsername(event.target.value)}
        />
        <FloatingLabelInput 
          label="Password"
          type="password"
          name="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <FloatingLabelInput
          label="Confirm Password"
          type="password"
          name="Confirm Password"
        />
        <div className="creg-button">
          {button && (
            <Button buttonStyle="btn--primary" buttonSize="btn--medium" onClick={handleSubmit}>
              Register
            </Button>
          )}
        </div>
        <div className="cuser-redirect">
          Already have an account?{" "}
          <Link className="signin" to="/sign-in">
            {" "}
            Sign in
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
