import React, { useContext } from "react";
import useResources from "../hooks/useResources";
import { selectedValueContext } from "../contexts/selectedValueContext";
import { useHospitals } from "../hooks/useHospitals";

const HospitalList = () => {
  const { hospitals } = useResources("hospitals");
  const { severityLevel } = useContext(selectedValueContext);
  const [filterHospitals, compare] = useHospitals();

  if (hospitals) {
    let filteredList = filterHospitals(hospitals, severityLevel);
    // console.log("filteredList: ", filteredList);

    // sorting according to waitingTime
    const orderedList = filteredList.sort(compare("waitingTime"));
    // console.log("orderedList: ", orderedList);

    return (
      <div>
        <h2>Hospital List</h2>
        <p>Your severity level: {severityLevel}</p>
        <ul>
          {orderedList.map((hospital, index) => {
            const {
              name,
              avgProcessTime,
              patientCount,
              waitingTime
            } = hospital;
            return (
              <li key={index}>
                <h4>{name}</h4>
                <p>Average Process Time: {avgProcessTime}</p>
                <p>Patient Count: {patientCount}</p>
                <p>Waiting Time: {waitingTime}</p>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return <div>...loading</div>;
};

export default HospitalList;
