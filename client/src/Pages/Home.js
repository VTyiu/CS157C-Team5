import React from "react";
import "../components/styles/Home.css";

const Home = ({ isAuth, setAuth }) => {
  return (
    <div className="homepage-container">
      <div className="homepage-leaderboard">
        <h1>Leaderboards</h1>
        <div className="homepage-players"></div>
      </div>
    </div>
  );
};

export default Home;
