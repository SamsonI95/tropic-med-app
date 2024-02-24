//App
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//Component
import { Button } from "../Reusables/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

//Firebase Server
import { auth } from "../../config/firebase";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

//Style
import "./OrgReg.css";

const OrgReg = () => {
  const [button] = useState(true);
  const navigate = useNavigate();
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessEType, setBusinessType] = useState("");
  const [cacNummber, setCacNumber] = useState("");
  const [tinNumber, setTinNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  //handle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  //user data function for databse
  const dbref = collection(db, "userinfo");

  //Form submission logic
  const register = async (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, businessEmail, password);

      // Add user information to Firestore
      await addDoc(dbref, {
        businessName: businessName,
        businessAddress: businessAddress,
        businessEmail: businessEmail,
        businessType: businessEType,
        cacNumber: cacNummber,
        tinNumber: tinNumber,
      });

      // Handle successful registration
      console.log("User added successfully!");
      alert("User added successfully!");
      navigate("/home");
    } catch (error) {
      // Handle errors
      console.error("Error adding user:", error.message);
      alert(`Error adding user: ${error.message}`);
    }
  };

  //Close form filled
  const handleCloseForm = () => {
    navigate("/reg-select");
  };

  return (
    <div className="orgreg-main-container">
      <img src="assets/Rectangle 106.png" alt="org-smile" className="image-1" />
      <form className="orgreg-container" onSubmit={register}>
        <div className="form-close">
          <FontAwesomeIcon icon={faTimes} onClick={handleCloseForm} />
        </div>
        <h3>Service Providers</h3>
        <h4>Enter your details to complete registration</h4>
        <div className="floating-input-container">
          <input
            className="floating-input"
            id="firstName"
            type="text"
            placeholder="Business Name"
            onChange={(e) => setBusinessName(e.target.value)}
          />
          <label className="form-label">Business Name</label>
        </div>
        <div className="floating-input-container">
          <input
            className="floating-input"
            type="text"
            placeholder="Business Address"
            onChange={(e) => setBusinessAddress(e.target.value)}
          />
          <label className="form-label">Business Address</label>
        </div>
        <div className="floating-input-container">
          <input
            className="floating-input"
            type="text"
            placeholder="Business Email"
            onChange={(e) => setBusinessEmail(e.target.value)}
          />
          <label className="form-label">Business Email</label>
        </div>
        <div className="floating-input-container">
          <input
            className="floating-input"
            type="text"
            placeholder="Business Type"
            onChange={(e) => setBusinessType(e.target.value)}
          />
          <label className="form-label">Business Type</label>
        </div>
        <div className="floating-input-container">
          <input
            className="floating-input"
            type="text"
            placeholder="CAC Number"
            onChange={(e) => setCacNumber(e.target.value)}
          />
          <label className="form-label">CAC Number</label>
        </div>
        <div className="floating-input-container">
          <input
            className="floating-input"
            type="phone"
            placeholder="TIN Number"
            onChange={(e) => setTinNumber(e.target.value)}
          />
          <label className="form-label">TIN Number</label>
        </div>
        <div className="floating-input-container">
          <input
            className="floating-input"
            id="dr-password"
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
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
        <div className="floating-input-container">
          <input
            className="floating-input"
            type={passwordVisible ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label className="form-label">Confirm Password</label>
        </div>
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

export default OrgReg;
