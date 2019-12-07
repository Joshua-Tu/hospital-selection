import React from "react";
import IllnessList from "./IllnessList";
import SeverityLevel from "./SeverityLevel";
import HospitalList from "./HospitalList";

const App = () => {
  return (
    <div>
      <IllnessList />
      <hr />
      <SeverityLevel />
      <hr />
      <HospitalList />
    </div>
  );
};

export default App;
