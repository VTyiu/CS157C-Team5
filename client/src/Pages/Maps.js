import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import "../components/styles/Map.css";

const Maps = () => {
  const [listOfMaps, setListOfMaps] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getMaps")
      .then((response) => {
        setListOfMaps(response.data);
      })
      .catch(() => {
        console.log("ERR");
      });
  }, []);

  return (
    <div className="showMaps">
      {listOfMaps.map((val) => {
        return (
          <div className="mapContainer">
            <h3>Map name: {val.name}</h3>
            {/* <h3>Url: {val.url}</h3> */}
            <img src={val.url} alt="new" className="map-url" />
          </div>
        );
      })}
    </div>
  );
};

export default Maps;
