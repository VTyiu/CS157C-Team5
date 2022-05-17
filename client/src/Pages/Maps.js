import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import "../components/styles/Map.css";
import { useNavigate } from "react-router-dom";

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
  }, [listOfMaps]);

  return (
    <div className="maps-container">
      {listOfMaps.map((val) => {
        return (
          <div className="map-container">
            <div className="map-title-background">
              <h3>{val.name}</h3>
            </div>
            <img src={val.url} alt="new" className="map-url" />
          </div>
        );
      })}
    </div>
  );
};

export default Maps;
