import React, { useContext } from "react";
import useResources from "../hooks/useResources";
import { selectedValueContext } from "../contexts/selectedValueContext";

const HospitalList = () => {
  const { hospitals } = useResources("hospitals");

  const { severityLevel } = useContext(selectedValueContext);

  if (hospitals) {
    let waitingListHospitals = [];
    hospitals.forEach(hospital => {
      let { waitingList } = hospital;
      if (severityLevel) {
        let hospitalInfo = {
          name: hospital.name,
          avgProcessTime: waitingList[severityLevel].averageProcessTime,
          patientCount: waitingList[severityLevel].patientCount,
          waitingTime:
            waitingList[severityLevel].averageProcessTime *
            waitingList[severityLevel].patientCount
        };
        // console.log(hospitalInfo);
        waitingListHospitals.push(hospitalInfo);
      }
    });
    console.log(waitingListHospitals);

    return (
      <div>
        <h2>Hospital List</h2>
        <p>Your severity level: {severityLevel}</p>
        <ul>
          {hospitals.map(hospital => (
            <li key={hospital.id}>{hospital.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  return <div>{"...loading"}</div>;
};

export default HospitalList;
/***
 * var arr = [];   //一个存储对象的数组   两个属性  分别为key  value

//排序函数
  function compare(str) {
    return function(obj1, obj2) {
        var value1 = obj1[str];
        var value2 = obj2[str]
        if (value1 < value2) {
            return 1;
        } else if (value1 > value2) {
            return -1;
        } else {
            return 0;
        }
    }
}

arr.sort(compare("key"));
 * 
 * 
 */
