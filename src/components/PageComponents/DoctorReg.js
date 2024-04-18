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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

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

      // Add user information to Firestore
      await addDoc(dbref, {
        firstName: firstName,
        lastName: lastName,
        specialization: specialization,
        licenseAuthority: licenseAuthority,
        licenseNumber: licenseNumber,
        phoneNumber: phoneNumber,
        email: email,
      });

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // After successfully creating the user, set the displayName
      await updateProfile(user, {
        displayName: firstName, // Set the displayName to the entered username
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

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  };

  //Close form filled
  const handleCloseForm = () => {
    navigate("/reg-select");
  };

  return (
    <div className="docreg-main-container">
      <img src="assets/Rectangle 105.png" alt="doc-smile" className="image-1" />
      <form onSubmit={register} className="docreg-container">
        <div className="form-close">
          <FontAwesomeIcon icon={faTimes} onClick={handleCloseForm} />
        </div>
        <h3>Welcome to TropicMed</h3>
        <h4>Enter your Credentials to Register an account</h4>
        <div className="floating-input-container">
          <input
            className="floating-input"
            id="firstName"
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label className="form-label">First Name</label>
        </div>
        <div className="floating-input-container">
          <input
            className="floating-input"
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label className="form-label">Last Name</label>
        </div>
        <div className="floating-input-container">
          <input
            className="floating-input"
            type="text"
            placeholder="Specialization"
            onChange={(e) => setSpecialization(e.target.value)}
          />
          <label className="form-label">Specialization</label>
        </div>
        <div className="floating-input-container">
          <input
            className="floating-input"
            type="text"
            placeholder="Licence Authority"
            onChange={(e) => setLicenseAuthority(e.target.value)}
          />
          <label className="form-label">Licence Authority</label>
        </div>
        <div className="floating-input-container">
          <input
            className="floating-input"
            type="text"
            placeholder="Licence Number"
            onChange={(e) => setLicenseNumber(e.target.value)}
          />
          <label className="form-label">Licence Number</label>
        </div>
        <div className="floating-input-container">
          <input
            className="floating-input"
            type="phone"
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label className="form-label">Phone Number</label>
        </div>
        <div className="floating-input-container">
          <input
            className="floating-input"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label">Email</label>
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
