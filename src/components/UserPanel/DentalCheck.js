//App
import React, {useState} from "react";

//Component
import { Button } from "../Reusables/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const DentalCheck = () => {
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
                  <h3>SS Dental Clinic Lekki</h3>
                  <p>4b Wole Olateju Crescent Off Admiralty way Lekki phase 1, Lagos</p>
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
                  <h3>Platinum Dental Surgery</h3>
                  <p>106, Aladelola street, ketu ikosi-magodo, Lagos</p>
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
                  <h3>De Favours Dental Clinic</h3>
                  <p>118, Ogudu Road, Ojota,23401, Lagos</p>
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
                  <h3>Beaconhill Smile Clinic</h3>
                  <p>4 Adeola Odeku St, behind The Place Island, Victoria Island, Lagos</p>
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
                  <h3>NENE DENTAL CLINIC LIMITED</h3>
                  <p>26, Allen Avenue, Ikeja, Lagos</p>
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

export default DentalCheck;
