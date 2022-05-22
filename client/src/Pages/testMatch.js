import React from "react";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MatchForm from "../components/Form/MatchForm";
import UpdateMatchForm from "../components/Form/UpdateMatchForm";
import "../components/styles/Profile.css";
import Axios from "axios";
import _ from "lodash";

const matchToUpdate = {
    updateMatchID: 0
};

const Profile = () => {
  const [openMatchForm, setOpenMatchForm] = useState(false);
  const [openUpdateForm, setOpenUpdateForm] = useState(false);
  const [listOfMatches, setListOfMatches] = useState([]);
  
  useEffect(() => {
    Axios.get("http://localhost:3001/getMatches")
      .then((response) => {
        // const currUserMatches = _.filter(response.data, { 'user_id': 0 });
        // console.log("current user matches", currUserMatches);
        // setListOfMatches(currUserMatches);
        setListOfMatches(response.data);
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
            {listOfMatches.map((val) => {
              return (
                <div className="match_container">
                  <div className="match_info">
                    <h3>Agent: {val.agent}</h3>
                    <h3>Map name: {val.mapName}</h3>
                    <h3>Number of kills: {val.kills}</h3>
                    <h3>Number of deaths: {val.deaths}</h3>
                    <h3>Main gun used: {val.gun}</h3>
                    <h3>Comments: {val.comments}</h3>
                  </div>

                  <div className="match_button">

                    <button
                      className="openUpdateForm"
                      onClick={() => {
                        matchToUpdate.updateMatchID = val._id;
                        console.log("update match id " + matchToUpdate.updateMatchID);
                        setOpenUpdateForm(true);
                      }}>Update</button>

                    <button onClick={() => {
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
        {openMatchForm && <MatchForm closeMatchForm={setOpenMatchForm} />}
        {openUpdateForm && <UpdateMatchForm closeUpdateForm={setOpenUpdateForm} />}
      </div>
    </div>
  );
};

export{matchToUpdate};
export default Profile;
