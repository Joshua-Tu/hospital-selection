import React, { useContext } from "react";
import useResources from "../hooks/useResources";
import { selectedValueContext } from "../contexts/selectedValueContext";
import { useHospitals } from "../hooks/useHospitals";

const HospitalList = () => {
  const { hospitals } = useResources("hospitals");
  const { severityLevel, handleSelectByClick } = useContext(
    selectedValueContext
  );
  const [filterHospitals, compare] = useHospitals();

  if (hospitals) {
    let filteredList = filterHospitals(hospitals, severityLevel);
    // console.log("filteredList: ", filteredList);

    // sorting according to waitingTime
    const orderedList = filteredList.sort(compare("waitingTime"));
    // console.log("orderedList: ", orderedList);

    return (
      <div className="five wide column">
        <h2>Hospital List</h2>
        <p>Your severity level: {severityLevel}</p>
        <div className="ui cards">
          {orderedList.map((hospital, index) => {
            const {
              name,
              avgProcessTime,
              patientCount,
              waitingTime
            } = hospital;
            return (
              <div className="card" key={index}>
                <div className="ui top attached button">
                  <i class="add icon"></i>
                  <div onClick={handleSelectByClick} className="hospital">
                    {name}
                  </div>
                </div>
                <div className="content">
                  <p>
                    <strong>Average Process Time:</strong> {avgProcessTime} mins
                  </p>
                  <p>
                    <strong>Patient Count:</strong> {patientCount}
                  </p>
                  <p>
                    <strong>Wait Time:</strong> {waitingTime} mins
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return <div>...loading</div>;
};

export default HospitalList;
