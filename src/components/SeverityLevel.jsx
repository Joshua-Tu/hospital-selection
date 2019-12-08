import React, { useContext } from "react";
import { selectedValueContext } from "../contexts/selectedValueContext";
import { IoIosHappy } from "react-icons/io";
import { FaSmile, FaSadTear, FaAngry, FaDizzy } from "react-icons/fa";
import "./severityLevel.css";

const SeverityLevel = () => {
  const { illness, severityLevel, hospital, handleSelectByClick } = useContext(
    selectedValueContext
  );

  console.log(hospital);

  return (
    <div className="five wide column">
      <h2>Select severity Level</h2>

      <div>
        <IoIosHappy />
        <button onClick={handleSelectByClick} className="severity">
          0
        </button>
        <FaSmile />
        <button onClick={handleSelectByClick} className="severity">
          1
        </button>
        <FaSadTear />
        <button onClick={handleSelectByClick} className="severity">
          2
        </button>
        <FaAngry />
        <button onClick={handleSelectByClick} className="severity">
          3
        </button>
        <FaDizzy />
        <button onClick={handleSelectByClick} className="severity">
          4
        </button>
      </div>
      <h4 className="selectedValues">
        Your illness: <span>{illness}</span>{" "}
      </h4>
      <h4 className="selectedValues">
        Your severity level: <span>{severityLevel}</span>
      </h4>
      <h4 className="selectedValues">
        Your hospital: <span>{hospital}</span>{" "}
      </h4>
    </div>
  );
};

export default SeverityLevel;
