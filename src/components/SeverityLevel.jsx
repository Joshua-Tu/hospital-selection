import React, { useContext } from "react";
import { selectedValueContext } from "../contexts/selectedValueContext";
import { IoIosHappy } from "react-icons/io";
import { FaSmile, FaSadTear, FaAngry, FaDizzy } from "react-icons/fa";

const SeverityLevel = () => {
  const { illness, severityLevel, handleSelectByClick } = useContext(
    selectedValueContext
  );

  return (
    <div>
      <h2>Severity Level</h2>
      <h3>Your illness: {illness}</h3>
      <div>
        <IoIosHappy />
        <button onClick={handleSelectByClick}>0</button>
        <FaSmile />
        <button onClick={handleSelectByClick}>1</button>
        <FaSadTear />
        <button onClick={handleSelectByClick}>2</button>
        <FaAngry />
        <button onClick={handleSelectByClick}>3</button>
        <FaDizzy />
        <button onClick={handleSelectByClick}>4</button>
      </div>
      <p>Your severity level: {severityLevel}</p>
    </div>
  );
};

export default SeverityLevel;
