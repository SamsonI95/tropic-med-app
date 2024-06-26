//App
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//Component
import { Button } from "../Reusables/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

//Server
import { auth, provider } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { getRedirectResult } from "firebase/auth";

//Style
import "./SinginPanel.css";

const SinginPanel = () => {
  const [button] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const signup = () => {
    navigate("/signin");
  };

  //handle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  //SignIn logic
  const signin = async (e) => {
    e.preventDefault();

    try {
      // Create user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
      // Handle successful registration
      console.log("User Signed In successfully!");
    } catch (error) {
      // Handle errors
      console.error("Error adding user:", error.message);
    }
  };

  // Google Sign-In function
  const googleclick = async () => {
    await signInWithPopup(auth, provider);
    console.log("Google Sign");
    navigate("/home");
  };

  //using redirect for mobile platfrom
  // const googlerClick = async () => {
  //   try {
  //     // Trigger sign-in with redirect
  //     await signInWithRedirect(auth, provider);
  //     alert("Signed in successfully");
  //     navigate("/home");
  //   } catch (error) {
  //     console.error(
  //       "Error during Google sign-in with redirect:",
  //       error.message
  //     );
  //   }
  // };

  // Check for redirect result when the component mounts
  useEffect(() => {
    const checkRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        // Handle the redirect result, e.g., update UI or navigate to a new page
        console.log("Redirect result:", result);
      } catch (error) {
        console.error("Error checking redirect result:", error.message);
      }
    };

    checkRedirectResult();
  }, []);

  return (
    <div className="sgn-main-container">
      <img src="assets/Component 2.png" alt="pills" className="image-3" />
      <div className="sgn-container">
        <h3>Welcome to TropicMed</h3>
        <h4>Enter your Credentials to Access an account</h4>
        <input
          className="input-field"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-field"
          placeholder="Password"
          type={passwordVisible ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="password-visibility-toggles"
          onClick={togglePasswordVisibility}
        >
          <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
        </button>
        <div className="sgn-button">
          {button && (
            <Button
              buttonStyle="btn--primary"
              buttonSize="btn--medium"
              onClick={signin}
            >
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
            <Button
              buttonStyle="btn--noutline1"
              buttonSize="btn--none"
              onClick={signup}
            >
              {" "}
              Sign Up
            </Button>
          </Link>
        </div>
        <div className="social-reg">
          {button && (
            <Button
              buttonStyle="btn--outline"
              buttonSize="btn--social"
              onClick={googleclick}
            >
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
