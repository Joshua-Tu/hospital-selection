import React, { useState, createContext } from "react";

const selectedValueContext = createContext();

const SelectedValueContextProvider = props => {
  const [illness, setIllness] = useState("");
  const [severityLevel, setSeverityLevel] = useState(null);
  const [hospital, setHospital] = useState("");

  // {target} is event.target
  const handleSelectByClick = ({ target }) => {
    const { innerHTML: content, className: buttonType } = target;
    if (buttonType === "illness") {
      setIllness(content);
    } else if (buttonType === "severity") {
      setSeverityLevel(parseInt(content));
    } else {
      setHospital(content);
    }
  };

  return (
    <selectedValueContext.Provider
      value={{ illness, severityLevel, hospital, handleSelectByClick }}
    >
      {props.children}
    </selectedValueContext.Provider>
  );
};

export { SelectedValueContextProvider, selectedValueContext };
