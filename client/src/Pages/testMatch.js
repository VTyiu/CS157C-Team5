import React from "react";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MatchForm from "../components/Form/MatchForm";
import UpdateMatchForm from "../components/Form/UpdateMatchForm";
import "../components/styles/Profile.css";
import Axios from "axios";
import _ from "lodash";

const matchToUpdate = {
    updateMatchID: 0,
    updateAgent: "",
    updateMapName: "",
    updateKills: 0,
    updateDeaths: 0,
    updateGun: "",
    updateComments: ""
};

const Profile = ({
  userName
}) => {
  const [openMatchForm, setOpenMatchForm] = useState(false);
  const [openUpdateForm, setOpenUpdateForm] = useState(false);
  const [listOfMatches, setListOfMatches] = useState([]);
  
  useEffect(() => {
    Axios.get("http://localhost:3001/getMatches")
      .then((response) => {
        const currUserMatches = _.filter(response.data, {username: userName});
        console.log("current user matches", currUserMatches);
        setListOfMatches(currUserMatches);
        // setListOfMatches(response.data);
      })
      .catch(() => {
        console.log("ERR");
      });
  }, []);

  const deleteMatch = (id) => {
    Axios.delete(`http://localhost:3001/deleteMatch/${id}`).then(() => {
      setListOfMatches(listOfMatches.filter((val) => {
        return val._id != id;
      }))
    });
  };

  return (
    <div>
      <div className="profile-container">
        <div className="profile-page-background">
          <div className="profile-page-container">
            <h1>Profile Page</h1>
            <button
              className="openMatchForm"
              onClick={() => {
                setOpenMatchForm(true);
              }}
            >
              Add Match
            </button>
          </div>
        </div>
        <div className="profile-matches-background">
          <div className="profile-matches-container">
            <h1> Recent Matches </h1>
            <div className="matches-container">
            {listOfMatches.map((val) => {
              return (
                <div className="match_container">
                  <div className="match_info">
                    <h4>Agent: </h4><p>{val.agent}<br></br></p>
                    <h4>Map name: </h4><p>{val.mapName}<br></br></p>
                    <h4>Number of kills: </h4><p>{val.kills}<br></br></p>
                    <h4>Number of deaths: </h4><p>{val.deaths}<br></br></p>
                    <h4>Main gun used: </h4><p>{val.gun}<br></br></p>
                    <h4>Comments: </h4><p>{val.comments}<br></br></p>
                  </div>

                  <div className="match_button">

                    <button
                      className="openUpdateForm"
                      onClick={() => {
                        matchToUpdate.updateMatchID = val._id;
                        matchToUpdate.updateAgent = val.agent;
                        matchToUpdate.updateMapName = val.mapName;
                        matchToUpdate.updateKills = val.kills;
                        matchToUpdate.updateDeaths = val.deaths;
                        matchToUpdate.updateGun = val.gun;
                        matchToUpdate.updateComments = val.comments;
                        console.log("update match properties " + matchToUpdate.updateMatchID);
                        setOpenUpdateForm(true);
                      }}>Update</button>

                    <button className="deleteBtn" onClick={() => {
                      deleteMatch(val._id);
                    }}>Delete</button>

                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="profile-match-container">
            

          </div> */}
          </div>
        </div>
        {openMatchForm && (<MatchForm userName={userName} closeMatchForm={setOpenMatchForm} setListOfMatches={setListOfMatches} listOfMatches={listOfMatches}/>)}
        {openUpdateForm && <UpdateMatchForm userName={userName} closeUpdateForm={setOpenUpdateForm} setListOfMatches={setListOfMatches} listOfMatches={listOfMatches}/>}
      </div>
    </div>
  );
};

export{matchToUpdate};
export default Profile;
