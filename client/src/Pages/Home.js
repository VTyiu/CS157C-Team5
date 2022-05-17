import React from "react";
import "../components/styles/Home.css";

const Home = ({ isAuth, setAuth }) => {
  return (
    <div className="page-home">
      <h1>Homepage</h1>
      {isAuth ? <div>Auth</div> : <div>Not Auth</div>}
      <button className="logout" onClick={() => setAuth(false)}>
        logout
      </button>
    </div>
  );
};

export default Home;
