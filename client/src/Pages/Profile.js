import React from "react";
import { useState } from "react";
import MatchForm from "../components/Form/MatchForm";
import "../components/styles/Profile.css";

const Profile = () => {
  const [openMatchForm, setOpenMatchForm] = useState(false);
  return (
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
  );
};

export default Profile;
