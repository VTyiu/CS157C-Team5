import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/Matchscreen.css";

const MatchForm = ({ closeMatchForm }) => {

  const [mapName, setMapName] = useState("");
  const [agent, setAgent] = useState("");
  const [gun, setGun] = useState("");
  const [kills, setKills] = useState("");
  const [deaths, setDeaths] = useState("");

  const createMatch = () => {
    Axios.post("http://localhost:3001/createMatch", {
      mapName: mapName,
      agent: agent,
      gun: gun,
      kills: kills,
      deaths: deaths
    })
  };

  return (
    <div className="match-form-background">
      <div className="match-form-container">
        <div className="match-form-close">
          <button onClick={() => closeMatchForm(false)}> X </button>
        </div>
        <div className="match-form-title">Match Information</div>
        <div className="match-form-body">
          <div className="match-form-kills">
            <label className="match-form-label">Kills</label>
            <input
              type="text"
              className="match-form-input"
              placeholder="Number of kills..."
            />
          </div>
          <div className="match-form-deaths">
            <label className="match-form-label">Deaths</label>
            <input
              type="text"
              className="match-form-input"
              placeholder="Number of deaths..."
            />
          </div>
          <div className="match-form-maps">
            <label for="mapdd">Maps</label>
            <select name="Maps" id="mapdd">
              <option value="select">Select a Map</option>
              <option value="bind">Bind</option>
              <option value="ascent">Ascent</option>
              <option value="haven">Haven</option>
              <option value="split">Split</option>
              <option value="fracture">Fracture</option>
              <option value="breeze">Breeze</option>
              <option value="icebox">Icebox</option>
            </select>
          </div>
          <div className="match-form-agents">
            <label for="agentdd">Agents</label>
            <select name="Agents" id="agentdd">
              <option value="select">Select an Agent</option>
              <option value="fade">Fade</option>
              <option value="neon">Neon</option>
              <option value="chamber">Chamber</option>
              <option value="skye">Skye</option>
              <option value="yoru">Yoru</option>
              <option value="astra">Astra</option>
              <option value="kayo">KAY/O</option>
              <option value="raze">Raze</option>
              <option value="brimstone">Brimstone</option>
              <option value="jett">Jett</option>
              <option value="sage">Sage</option>
              <option value="viper">Viper</option>
              <option value="breach">Breach</option>
              <option value="cypher">Cypher</option>
              <option value="sova">Sova</option>
              <option value="omen">Omen</option>
              <option value="reyna">Reyna</option>
              <option value="killjoy">Killjoy</option>
            </select>
          </div>
        </div>
        <div className="match-form-footer">
          <button onClick={() => closeMatchForm(false)}>Cancel</button>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default MatchForm;
