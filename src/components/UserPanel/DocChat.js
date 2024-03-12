//App
import React, { useState } from "react";

//Component
import { Button } from "../Reusables/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const DocChat = () => {
  const [button] = useState(true);

  //Popup toggle control
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const togglePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };

  return (
    <>
      <section className="pharmdrug-wrapper">
        <div className="search-field-container">
          <div className="search-bar">
            <input
              type="search"
              className="pd-search-bar"
              placeholder="Search"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="pd-search-icon"
            />
            {button && (
              <Button buttonSize="btn--small2" buttonStyle="btn--secondary2">
                Search
              </Button>
            )}
          </div>
          <div className="filter-bar">
            <button className="pd-filter-button" onClick={togglePopup}>
              Filter <FontAwesomeIcon icon={faFilter} className="filter-icon" />
            </button>
          </div>
        </div>
        {isPopupVisible && (
          <div className="filter-pop-up-container">
            <div className="filter-popup">
              <ul>
                <li>Availability</li>
                <li>Specialization</li>
                <li>Add Filter </li>
                <li>Add Filter </li>
              </ul>
            </div>
          </div>
        )}
        <div className="pharm-drugs-list-container">
          <ul>
            <li>
              <button className="pharm-drug-button">
                <div className="pharm-drug-image i1"></div>
                <div className="pharm-drug-text">
                  <h3>Sylvia Okoro </h3>
                  <p>General Doctor.</p>
                </div>
                <div className="pharm-drug-order-text">
                  <h3>Online </h3>
                  <h4>Available Now</h4>
                </div>
              </button>
            </li>
            <li>
              <button className="pharm-drug-button">
                <div className="pharm-drug-image i2"></div>
                <div className="pharm-drug-text">
                  <h3>Jimoh Hassan</h3>
                  <p>Gynecologist</p>
                </div>
                <div className="pharm-drug-order-text">
                  <h3 style={{ color: "#cbcfdc" }}>Offline</h3>
                  <h4 style={{ display: "flex", flexDirection: "column" }}>
                    Available <span>Tomorrow 2pm</span>
                  </h4>
                </div>
              </button>
            </li>
            <li>
              <button className="pharm-drug-button">
                <div className="pharm-drug-image i3"></div>
                <div className="pharm-drug-text">
                  <h3>Daniel Abu</h3>
                  <p>General Doctor</p>
                </div>
                <div className="pharm-drug-order-text">
                  <h3 style={{ color: "#cbcfdc" }}>Offline</h3>
                  <h4 style={{ display: "flex", flexDirection: "column" }}>
                    Available <span> Friday 10am</span>
                  </h4>
                </div>
              </button>
            </li>
            <li>
              <button className="pharm-drug-button">
                <div className="pharm-drug-image i4"></div>
                <div className="pharm-drug-text">
                  <h3>Olivia Madueke</h3>
                  <p>Pediatrician</p>
                </div>
                <div className="pharm-drug-order-text">
                  <h3>Online</h3>
                  <h4>Available Now</h4>
                </div>
              </button>
            </li>
            <li>
              <button className="pharm-drug-button">
                <div className="pharm-drug-image i5"></div>
                <div className="pharm-drug-text">
                  <h3>Brenda Moses</h3>
                  <p>Dentists</p>
                </div>
                <div className="pharm-drug-order-text">
                  <h3>Online</h3>
                  <h4>Available Now</h4>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default DocChat;
