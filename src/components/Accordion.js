//App
import React, { useState } from "react";

//Style
import "./Accordion.css"; // You can create a CSS file for styling

//Icons
import { IonIcon } from "@ionic/react";
import { addCircleOutline, removeCircleOutline } from "ionicons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";


const Accordions = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="accordion">
          <button
            className={`accordion-toggle ${
              expandedIndex === index ? "expanded" : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            <h3>{item.question}</h3>
            <span
              className="arrow"
            >
              <IonIcon icon={expandedIndex === index ? removeCircleOutline : addCircleOutline} />
            </span>
          </button>
          {expandedIndex === index && (
            <div className="accordion-content">
              <p>
                <strong>Answer:</strong> {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordions;
