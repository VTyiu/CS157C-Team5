import React from "react";
import { useState } from "react";
import Axios from "axios";
import "../styles/Matchscreen.css";
import { matchToUpdate } from "../../Pages/testMatch.js";

const UpdateMatchForm = ({ closeUpdateForm, userName, setListOfMatches, listOfMatches}) => {

    const [mapName, setMapName] = useState(matchToUpdate.updateMapName);
    const [agent, setAgent] = useState(matchToUpdate.updateAgent);
    const [gun, setGun] = useState(matchToUpdate.updateGun);
    const [comments, setComments] = useState(matchToUpdate.updateComments);
    const [kills, setKills] = useState(matchToUpdate.updateKills);
    const [deaths, setDeaths] = useState(matchToUpdate.updateDeaths);

    


    //   const createMatch = () => {
    //     Axios.post("http://localhost:3001/createMatch", {
    //       mapName: mapName,
    //       agent: agent,
    //       gun: gun,
    //       kills: kills,
    //       deaths: deaths,
    //       comments: comments
    //     })
    //   };

    const updateMatch = (_id) => {
        Axios.put("http://localhost:3001/updateMatch", {
            mapName: mapName,
            agent: agent,
            gun: gun,
            kills: kills,
            deaths: deaths,
            comments: comments,
            _id: _id,
            username: userName
        }).then(() => {
            setListOfMatches(
                listOfMatches.map((val) => {
                    return val._id == _id ? {
                        _id: _id,
                        mapName: mapName,
                        agent: agent,
                        gun: gun,
                        kills: kills,
                        deaths: deaths,
                        comments: comments,
                        username: userName
                    } : val;
                }))
        })
    };

    function setMapDd() {
        var select = document.getElementById('mapdd');
        console.log(select.value);
        setMapName(select.value);
    }

    function setAgentDd() {
        var select = document.getElementById('agentdd');
        console.log(select.value);
        setAgent(select.value);
    }

    function setGunDd() {
        var select = document.getElementById('gundd');
        console.log(select.value);
        setGun(select.value);
    }

    function submitHandler(){
        updateMatch(matchToUpdate.updateMatchID);
        closeUpdateForm(false);
    }

    


    return (
        
        <div className="match-form-background">
            <div className="match-form-container">
                <div className="match-form-close">
                    <button onClick={() => closeUpdateForm(false)}> X </button>
                </div>
                <div className="match-form-title">Update Match Information</div>
                <div className="match-form-body">
                    <div className="match-form-attr">
                        <label className="match-form-label">Kills</label>
                        <input
                            type="number"
                            className="match-form-input"
                            placeholder="Number of kills..."
                            id = "changeKills"
                            onChange={(event) => {
                                setKills(event.target.value);
                            }}
                        />
                    </div>
                    <div className="match-form-attr">
                        <label className="match-form-label">Deaths</label>
                        <input
                            type="number"
                            className="match-form-input"
                            placeholder="Number of deaths..."
                            onChange={(event) => {
                                setDeaths(event.target.value);
                            }}
                        />
                    </div>
                    <div className="match-form-attr">
                        <label className="match-form-label">Map</label>
                        <select name="Maps" id="mapdd"
                            onChange={setMapDd}>
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
                    <div className="match-form-attr">
                        <label className="match-form-label">Agent</label>
                        <select name="Agents" id="agentdd" onChange={setAgentDd}>
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
                    <div className="match-form-attr">
                        <label className="match-form-label">Gun</label>
                        <select name="Guns" id="gundd" onChange={setGunDd}>
                            <option value="select">Select a Gun</option>
                            <option value="phantom">phantom</option>
                            <option value="vandal">vandal</option>
                            <option value="stinger">stinger</option>
                            <option value="spectre">spectre</option>
                            <option value="bucky">bucky</option>
                            <option value="judge">judge</option>
                            <option value="bulldog">bulldog</option>
                            <option value="guardian">guardian</option>
                            <option value="marshal">marshal</option>
                            <option value="operator">operator</option>
                            <option value="ares">ares</option>
                            <option value="odin">odin</option>
                        </select>
                    </div>
                    <div className="match-form-attr">
                        <label className="match-form-label">Comments</label>
                        <input
                            type="text"
                            className="match-form-input-comment"
                            placeholder="Comments..."
                            onChange={(event) => {
                                setComments(event.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="match-form-footer">
                    <button onClick={() => closeUpdateForm(false)}>Cancel</button>
                    <button onClick={submitHandler}> Submit </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateMatchForm;
