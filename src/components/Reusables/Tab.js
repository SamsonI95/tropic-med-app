//App
import React, { useState } from "react";

//Style
import "./Tab.css"

const Tab = ({tab}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="tab-container">
        <div>
          {tab.map((tab, index) => (
            <button
              key={index}
              className={`${
                index === activeTab
                  ? "active"
                  : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="mt-4">{tab[activeTab].content}</div>
      </div>
    </>
  );
};

export default Tab;
