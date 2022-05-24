import React from "react";
import "../components/styles/Home.css";

const Home = ({ isAuth, setAuth }) => {
  return (
    <div className="homepage-container">
      <div className="homepage-leaderboard">
        <div className="homepage-players"></div>
      </div>
    </div>
  );
};

export default Home;
