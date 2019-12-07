import React from "react";
import useResources from "../hooks/useResources";

const HospitalList = () => {
  const resources = useResources("hospitals");

  if (resources.hospitals) {
    return (
      <>
        <h2>Hospital List</h2>
        <ul>
          {resources.hospitals.map(hospital => (
            <li key={hospital.id}>{hospital.name}</li>
          ))}
        </ul>
      </>
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
