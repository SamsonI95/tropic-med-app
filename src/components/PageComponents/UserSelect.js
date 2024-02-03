//App
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//Component
import { Button } from "../Reusables/Button";

//Style
import "./UserSelect.css";


const UserSelect = () => {
  const [button] = useState(true);

  const [selectedUserType, setSelectedUserType] = useState("");
  const navigate = useNavigate();

  const handleNextClick = () => {
    // Perform actions based on the selected user type
    switch (selectedUserType) {
      case "Customer":
        navigate("/customer-reg");
        break;
      case "Doctor":
        navigate("/doc-reg");
        break;
      case "Service Provider":
        navigate("/org-reg");
        break;
      default:
        // Handle default case or show an error message
        break;
    }
  };

  return (
    <div className="reg-container">
      <img src="assets/Rectangle 104.png" alt="doc-smile" className="image-1" />
      <div className="user-select-container">
        <h3>Welcome to TropicMed</h3>
        <h4>Please select your user type to complete your registration</h4>
        <select
          className="form-control"
          onChange={(e) => setSelectedUserType(e.target.value)}
        >
          <option>Select User Type</option>
          <option>Customer</option>
          <option>Doctor</option>
          <option>Service Provider</option>
        </select>
        <div className="usrslt-button">
          {button && (
            <Button
              buttonStyle="btn--primary"
              buttonSize="btn--medium"
              onClick={handleNextClick}
            >
              Next
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
      </div>
    </div>
  );
};

export default UserSelect;
