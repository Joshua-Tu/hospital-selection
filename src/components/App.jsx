import React from "react";
import IllnessList from "./IllnessList";
import SeverityLevel from "./SeverityLevel";
import HospitalList from "./HospitalList";

const App = () => {
  return (
    <div className="ui three column grid container">
      <IllnessList />
      <SeverityLevel />
      <HospitalList />
    </div>
  );
};

export default App;
