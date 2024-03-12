//App
import React from "react";

//Component
import Tab from "../Reusables/Tab";

const HealthRecord = () => {
  const TabStates = [
    { title: "Medical History", content: ""},
    { title: "Vaccination", content: "" },
    { title: "Allergies", content: "" },
  ];
  return (
    <>
    <Tab tab={TabStates} className="tab" />
    </>
  );
};

export default HealthRecord;
