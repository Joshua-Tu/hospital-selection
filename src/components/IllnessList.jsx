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
      <div className="four wide column">
        <h2>Select an Illness</h2>
        <div className="ui middle aligned selection list">
          {resources.illnesses.map(({ illness }) => (
            <div key={illness.id} className="item">
              <FaBiohazard />
              <div className="content">
                <div onClick={handleSelectByClick} className="illness">
                  {illness.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>{"...loading"}</div>;
};

export default IllnessList;
