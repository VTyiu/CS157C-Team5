import React from "react";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MatchForm from "../components/Form/MatchForm";
import "../components/styles/Profile.css";
import Axios from "axios";
import _ from "lodash";

const Profile = () => {
  const [openMatchForm, setOpenMatchForm] = useState(false);
  const [listOfMatches, setListOfMatches] = useState([]);


  useEffect(() => {
    Axios.get("http://localhost:3001/getMatches")
      .then((response) => {
        const currUserMatches = _.filter(response.data, {'user_id': 0});
        console.log("current user matches", currUserMatches);
        setListOfMatches(currUserMatches);
      })
      .catch(() => {
        console.log("ERR");
      });
  }, []);

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
                  <div className="match">
                    <h3>Agent: {val.agent}</h3>
                    <h3>Map name: {val.mapName}</h3>
                    <h3>Number of kills: {val.kills}</h3>
                    <h3>Number of deaths: {val.deaths}</h3>
                    <h3>Main gun used: {val.gun}</h3>
                    <h3>Comments: {val.comments}</h3>
                  </div>
              );
            })}
            </div>
          <div className="profile-match-container">
            

          </div>
          </div>
          {openMatchForm && <MatchForm closeMatchForm={setOpenMatchForm} />}
        </div>
    </div>
  );
};

export default Profile;
