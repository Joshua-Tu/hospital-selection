import { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
  const [resources, setResources] = useState([]);
  // console.log(resources);
  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `http://dmmw-api.australiaeast.cloudapp.azure.com:8080/${resource}`
      );

      setResources(response.data._embedded);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;
