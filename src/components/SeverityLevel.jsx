import React, { useState, useContext } from "react";
import { selectedValueContext } from "../contexts/selectedValueContext";

const SeverityLevel = () => {
  const { illness, severityLevel, handleSelectByClick } = useContext(
    selectedValueContext
  );

  return (
    <div>
      <h2>Severity Level</h2>
      <h3>Your illness: {illness}</h3>
      <div>
        <button onClick={handleSelectByClick}>0</button>
        <button onClick={handleSelectByClick}>1</button>
        <button onClick={handleSelectByClick}>2</button>
        <button onClick={handleSelectByClick}>3</button>
        <button onClick={handleSelectByClick}>4</button>
      </div>
      <p>Your severity level: {severityLevel}</p>
    </div>
  );
};

export default SeverityLevel;
