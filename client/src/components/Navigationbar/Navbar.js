import React from "react";
import "../styles/Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ isAuth, setAuth }) => {
  return (
    <nav
      className="nav-container
    "
    >
      <div className="logo">Valstats</div>
      <div className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/maps">Maps</Link>
        {/* {isAuth && <Link to="/profile">Profile</Link>} */}
        {isAuth && <Link to="/testmatch">Profile</Link>}
        {!isAuth && <Link to="/form">Signup</Link>}
        {!isAuth && <Link to="/login">Login</Link>}
        {isAuth && (
          <button className="nav-logout" onClick={() => setAuth(false)}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
