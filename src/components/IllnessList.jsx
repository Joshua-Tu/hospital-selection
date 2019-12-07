import React, { useContext } from "react";
import useResources from "../hooks/useResources";
import { selectedValueContext } from "../contexts/selectedValueContext";
import { FaBiohazard } from "react-icons/fa";

const IllnessList = () => {
  const resources = useResources("illnesses");

  // the selected illness state is put into the selectedValueContext.js, because it will be transferred to SeverityLevel component
  const { handleSelectByClick } = useContext(selectedValueContext);

  if (resources.illnesses) {
    return (
      <div>
        <h2>Illness List</h2>
        <ul className="ui relaxed divided list">
          {resources.illnesses.map(({ illness }) => (
            <li key={illness.id}>
              <FaBiohazard />
              <button onClick={handleSelectByClick} className="illness">
                {illness.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return <div>{"...loading"}</div>;
};

export default IllnessList;
