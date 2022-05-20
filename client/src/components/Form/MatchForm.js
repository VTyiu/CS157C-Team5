import React from "react";
import "../styles/Matchscreen.css";

const MatchForm = ({ closeMatchForm }) => {
  return (
    <div className="match-form-background">
      <div className="match-form-container">
        <div className="match-form-close">
          <button onClick={() => closeMatchForm(false)}> X </button>
        </div>
        <div className="match-form-title">Match Information</div>
        <div className="match-form-body">
          <div className="match-form-inputs">
            <label className="match-form-label">Kills</label>
            <input
              type="text"
              className="match-form-input"
              placeholder="Number of kills..."
            />
          </div>
          <div className="match-form-inputs">
            <label className="match-form-label">Deaths</label>
            <input
              type="text"
              className="match-form-input"
              placeholder="Number of deaths..."
            />
          </div>
          <div className="match-form-inputs">
            <label className="match-form-label">Map</label>
            <input
              type="text"
              className="match-form-input"
              placeholder="Name of the map..."
            />
          </div>
          <div className="match-form-inputs">
            <label className="match-form-label">Gun</label>
            <input
              type="text"
              className="match-form-input"
              placeholder="Most used gun..."
            />
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
