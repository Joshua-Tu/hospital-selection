import React, { useContext } from "react";
import useResources from "../hooks/useResources";
import { selectedValueContext } from "../contexts/selectedValueContext";

const IllnessList = () => {
  const resources = useResources("illnesses");

  // the selected illness state is put into the selectedValueContext.js, because it will be transferred to SeverityLevel component
  const { handleSelectByClick } = useContext(selectedValueContext);

  if (resources.illnesses) {
    return (
      <>
        <h2>Illness List</h2>
        <ul>
          {resources.illnesses.map(({ illness }) => (
            <li key={illness.id}>
              <button onClick={handleSelectByClick} className="illness">
                {illness.name}
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return <div>{"...loading"}</div>;
};

export default IllnessList;
