//App
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//Component
import { Button } from "../Reusables/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

//Firebase Server
import { auth } from "../../config/firebase";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

//Style
import "./DoctorReg.css";

const DocReg = () => {
  const [button] = useState(true);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [licenseAuthority, setLicenseAuthority] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
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
      await createUserWithEmailAndPassword(auth, email, password);

      // Add user information to Firestore
      await addDoc(dbref, {
        firstName: firstName,
        lastName: lastName,
        specialization: specialization,
        licenseAuthority: licenseAuthority,
        licenseNumber: licenseNumber,
        phoneNumber: phoneNumber,
        email: email,
        phoneNumber: phoneNumber,
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

  return (
    <div className="docreg-main-container">
      <img src="assets/Rectangle 105.png" alt="doc-smile" className="image-1" />
      <form onSubmit={register} className="docreg-container">
        <h3>Welcome to TropicMed</h3>
        <h4>Enter your Credentials to Register an account</h4>

        <input
          className="dr-input-field"
          id="firstName"
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="dr-input-field"
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className="dr-input-field"
          type="text"
          placeholder="Specialization"
          onChange={(e) => setSpecialization(e.target.value)}
        />
        <input
          className="dr-input-field"
          type="text"
          placeholder="Licence Authority"
          onChange={(e) => setLicenseAuthority(e.target.value)}
        />
        <input
          className="dr-input-field"
          type="text"
          placeholder="Licence Number"
          onChange={(e) => setLicenseNumber(e.target.value)}
        />
        <input
          className="dr-input-field"
          type="phone"
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          className="dr-input-field"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <input
            className="dr-input-field"
            id="dr-password"
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
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
        <input
          className="dr-input-field"
          type={passwordVisible ? "text" : "password"}
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
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
            <Button
              buttonStyle="btn--primary"
              buttonSize="btn--medium"
              onClick={register}
            >
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
      </form>
    </div>
  );
};

export default DocReg;
