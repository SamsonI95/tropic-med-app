//App
import React, { useState } from "react";

//Component
import { Button } from "../Reusables/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const TestLabs = () => {
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
                  <h3>Healthview Medical Laboratory</h3>
                  <p>1st Floor, 5 Adekunle St, Ebute Metta, Lagos</p>
                </div>
                <div className="pharm-drug-order-text">
                  {button && (
                    <Button
                      buttonSize="btn--small2"
                      buttonStyle="btn--secondary2"
                    >
                      Book
                    </Button>
                  )}
                </div>
              </button>
            </li>
            <li>
              <button className="pharm-drug-button">
                <div className="pharm-drug-image i2"></div>
                <div className="pharm-drug-text">
                  <h3>El-Lab Limited</h3>
                  <p>3rd Avenue Festac Town, Amuwo Odofin, Lagos</p>
                </div>
                <div className="pharm-drug-order-text">
                  {button && (
                    <Button
                      buttonSize="btn--small2"
                      buttonStyle="btn--secondary2"
                    >
                      Book
                    </Button>
                  )}
                </div>
              </button>
            </li>
            <li>
              <button className="pharm-drug-button">
                <div className="pharm-drug-image i3"></div>
                <div className="pharm-drug-text">
                  <h3>FinLab Nigeria Limited</h3>
                  <p>1 Sylvia Crescent, Lagos</p>
                </div>
                <div className="pharm-drug-order-text">
                  {button && (
                    <Button
                      buttonSize="btn--small2"
                      buttonStyle="btn--secondary2"
                    >
                      Book
                    </Button>
                  )}
                </div>
              </button>
            </li>
            <li>
              <button className="pharm-drug-button">
                <div className="pharm-drug-image i4"></div>
                <div className="pharm-drug-text">
                  <h3>DNA Centre for Paternity Test Nigeria</h3>
                  <p>73 Allen Avenue, Ikeja, Lagos</p>
                </div>
                <div className="pharm-drug-order-text">
                  {button && (
                    <Button
                      buttonSize="btn--small2"
                      buttonStyle="btn--secondary2"
                    >
                      Book
                    </Button>
                  )}
                </div>
              </button>
            </li>
            <li>
              <button className="pharm-drug-button">
                <div className="pharm-drug-image i5"></div>
                <div className="pharm-drug-text">
                  <h3>Acouns Laboratory Diagnostic Center</h3>
                  <p>Km 12 Lekki - Epe Expy, Eti-Osa 106104, Lekki, Lagos</p>
                </div>
                <div className="pharm-drug-order-text">
                  {button && (
                    <Button
                      buttonSize="btn--small2"
                      buttonStyle="btn--secondary2"
                    >
                      Book
                    </Button>
                  )}
                </div>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default TestLabs;
