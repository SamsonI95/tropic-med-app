//App
import React, { useEffect } from "react";
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
import { collection, addDoc } from "firebase/firestore";
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

  //Authenticate and sync user profile with database
  const user = auth.currentUser;

  //user data function for databse
  const dbref = collection(db, "userinfo");

  //Edit profile form data control
  const [isEditing, setIsEditing] = useState(false);

  //Saving and Updating user data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user) {
      await addDoc(dbref, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        dob: dob,
        phoneNumber: phoneNumber,
        bloodGroup: bloodGroup,
        genotype: genotype,
        address: address,
      });
      console.log("User profile updated successfully!");
      setIsEditing(false);
    } else {
      console.error("User not signed in.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {/* <label className="p-form-label">First Name</label>*/}
          </div>
          <div className="p-input-container">
            <input
              type="text"
              className="p-input-field"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {/*<label className="p-form-label">Last Name</label>*/}
          </div>
          <div className="p-input-container">
            <input type="text" className="p-input-field" placeholder="Email" />
            {/*<label className="p-form-label">Email</label>*/}
          </div>
          <div className="p-input-container">
            <input
              type="date"
              className="p-input-field"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            {/*<label className="p-form-label">Date of Birth</label>*/}
          </div>
          <div className="p-input-container">
            <input
              type="text"
              className="p-input-field"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {/*<label className="p-form-label">Phone Number</label>*/}
          </div>
          <div className="p-input-container">
            <input
              type="text"
              className="p-input-field"
              placeholder="Blood Group"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            />
            {/*<label className="p-form-label">Blood Group</label>*/}
          </div>
          <div className="p-input-container">
            <input
              type="text"
              className="p-input-field"
              placeholder="Genotype"
              value={genotype}
              onChange={(e) => setGenotype(e.target.value)}
            />
            {/* <label className="p-form-label">Genotype</label>*/}
          </div>
          <div className="p-input-container">
            <input
              type="text"
              className="p-input-field"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
                type="submit"
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
