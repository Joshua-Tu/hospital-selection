import React, { useState, createContext } from "react";

const selectedValueContext = createContext();

const SelectedValueContextProvider = props => {
  const [illness, setIllness] = useState("");
  const [severityLevel, setSeverityLevel] = useState(null);

  // {target} is event.target
  const handleSelectByClick = ({ target }) => {
    const { innerHTML: content, className: buttonType } = target;

    if (buttonType === "illness") {
      setIllness(content);
    } else {
      setSeverityLevel(parseInt(content));
    }
  };

  return (
    <selectedValueContext.Provider
      value={{ illness, severityLevel, handleSelectByClick }}
    >
      {props.children}
    </selectedValueContext.Provider>
  );
};

export { SelectedValueContextProvider, selectedValueContext };
