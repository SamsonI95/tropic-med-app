//App
import React from "react";
import { useState } from "react";

//Component
import { Button } from "../Reusables/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

//Style
import "./Profile.css";

//Server
import { auth, db } from "../../config/firebase";
import { storage } from "../../config/firebase";

const Profile = () => {
  const [button] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [genotype, setGenotype] = useState("");
  const [address, setAddress] = useState("");

  //Edit profile form data control
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <form>
        <div className="form-header-container">
          <div className="header-image">
            <img src="#" alt="user" />
            <FontAwesomeIcon icon={faUser} />
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              style={{ display: "none" }}
            />
          </div>
          <div className="header-user-info">
            <h3>User Name</h3>
            <p>User Email</p>
          </div>
          <div
            className="edit-buttton"
            onClick={() => setIsEditing(!isEditing)}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </div>
        </div>
        <div className="form-content-container">
          <div className="p-input-container">
            <input
              type="text"
              className="p-input-field"
              placeholder="First Name"
            />
            {/* <label className="p-form-label">First Name</label>*/}
          </div>
          <div className="p-input-container">
            <input
              type="text"
              className="p-input-field"
              placeholder="Last Name"
            />
            {/*<label className="p-form-label">Last Name</label>*/}
          </div>
          <div className="p-input-container">
            <input type="text" className="p-input-field" placeholder="Email" />
            {/*<label className="p-form-label">Email</label>*/}
          </div>
          <div className="p-input-container">
            <input
              type="text"
              className="p-input-field"
              placeholder="Date of Birth"
            />
            {/*<label className="p-form-label">Date of Birth</label>*/}
          </div>
          <div className="p-input-container">
            <input
              type="text"
              className="p-input-field"
              placeholder="Phone Number"
            />
            {/*<label className="p-form-label">Phone Number</label>*/}
          </div>
          <div className="p-input-container">
            <input
              type="text"
              className="p-input-field"
              placeholder="Blood Group"
            />
            {/*<label className="p-form-label">Blood Group</label>*/}
          </div>
          <div className="p-input-container">
            <input
              type="text"
              className="p-input-field"
              placeholder="Genotype"
            />
            {/* <label className="p-form-label">Genotype</label>*/}
          </div>
          <div className="p-input-container">
            <input
              type="text"
              className="p-input-field"
              placeholder="Address"
            />
            {/*<label className="p-form-label">Address</label>*/}
          </div>
          <div className="p-input-container">
            <input
              type="text"
              className="p-input-field"
              placeholder="Add Delivery Address"
            />
            {/*<label className="p-form-label">Add Delivery Address</label>*/}
          </div>
          <div className="p-input-container">
            <input
              type="text"
              className="p-input-field"
              placeholder="Add Delivery Address"
            />
            {/*<label className="p-form-label">Add Delivery Address</label>*/}
          </div>
          <div className="button-container">
            {button && (
              <Button
                buttonSize="btn--large"
                buttonStyle="btn--secondary2"
                onClick={() => {
                   // Exit editing mode after saving changes
                }}
              >
                Save Changes
              </Button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default Profile;
