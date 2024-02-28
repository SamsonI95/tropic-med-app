//Ap
import React from "react";
import { useState } from "react";

//Component
import { Button } from "../Reusables/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

//Style
import "./PharmDrugs.css";

const PharmDrug = () => {
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
                <li>Location</li>
                <li>Completed Orders</li>
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
                  <h3>MedPlus Pharmaceutical </h3>
                  <p>84 Adeniran Ogunsanya St, Surulere 101283, Lagos.</p>
                </div>
                <div className="pharm-drug-order-text">
                  <h3>97%</h3>
                  <h4>Orders Completed</h4>
                </div>
              </button>
            </li>
            <li>
              <button className="pharm-drug-button">
                <div className="pharm-drug-image i2"></div>
                <div className="pharm-drug-text">
                  <h3>Rozec Pharmacy</h3>
                  <p>Plot 50 Babs Animashaun Rd, Surulere, Lagos</p>
                </div>
                <div className="pharm-drug-order-text">
                  <h3>75%</h3>
                  <h4>Orders Completed</h4>
                </div>
              </button>
            </li>
            <li>
              <button className="pharm-drug-button">
                <div className="pharm-drug-image i3"></div>
                <div className="pharm-drug-text">
                  <h3>Silverline Pharmacy</h3>
                  <p>
                    Silverline Pharmacy Olatunde Onimole St, Iganmu 101241,
                    Lagos
                  </p>
                </div>
                <div className="pharm-drug-order-text">
                  <h3>100%</h3>
                  <h4>Orders Completed</h4>
                </div>
              </button>
            </li>
            <li>
              <button className="pharm-drug-button">
                <div className="pharm-drug-image i4"></div>
                <div className="pharm-drug-text">
                  <h3>HealthPlus Pharmacy</h3>
                  <p>
                    Shop 84, Adeniran Ogunsanya Shopping Mall, St, Surulere,
                    Lagos
                  </p>
                </div>
                <div className="pharm-drug-order-text">
                  <h3>90%</h3>
                  <h4>Orders Completed</h4>
                </div>
              </button>
            </li>
            <li>
              <button className="pharm-drug-button">
                <div className="pharm-drug-image i5"></div>
                <div className="pharm-drug-text">
                  <h3>Bernados Pharmacy</h3>
                  <p>Funsho Williams Ave, Surulere 101241, Lagos</p>
                </div>
                <div className="pharm-drug-order-text">
                  <h3>89%</h3>
                  <h4>Orders Completed</h4>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default PharmDrug;
