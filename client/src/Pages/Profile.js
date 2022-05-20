import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import MatchForm from "../components/Form/MatchForm";
import "../components/styles/Profile.css";

const Profile = ({ isAuth, setAuth }) => {
  const [openMatchForm, setOpenMatchForm] = useState(false);

  return (
    <div>
      {isAuth ? (
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
            </div>
            <div className="profile-match-container"></div>
          </div>
          {openMatchForm && <MatchForm closeMatchForm={setOpenMatchForm} />}
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default Profile;
