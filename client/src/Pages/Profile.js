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
          <h1>Profile Page</h1>
          <button
            className="openMatchForm"
            onClick={() => {
              setOpenMatchForm(true);
            }}
          >
            Add Match
          </button>
          {openMatchForm && <MatchForm closeMatchForm={setOpenMatchForm} />}
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default Profile;
