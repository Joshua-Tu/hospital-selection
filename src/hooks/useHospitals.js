export const useHospitals = () => {
  const filterHospitals = (hospitals, severityLevel) => {
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
    return waitingListHospitals;
  };

  //sorting function
  const compare = key => {
    return function(obj1, obj2) {
      var value1 = obj1[key];
      var value2 = obj2[key];
      if (value1 < value2) {
        return -1;
      } else if (value1 > value2) {
        return 1;
      } else {
        return 0;
      }
    };
  };

  return [filterHospitals, compare];
};
