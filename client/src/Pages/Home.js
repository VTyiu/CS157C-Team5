import React from "react";
import "../components/styles/Home.css";

const Home = ({ isAuth, setAuth, userName }) => {
  return (
    <div className="homepage-container">
      <div className="homepage-leaderboard">
      {isAuth && userName !== "" ? (
          <h1>Welcome: {userName}</h1>
        ) : (
          <h1>Join now!</h1>
        )}
        <div className="homepage-players"></div>
      </div>
    </div>
  );
};

export default Home;
