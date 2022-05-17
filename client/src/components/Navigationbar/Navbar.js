import React from "react";
import "../styles/Navbar.css";
import { NavMenu } from "./NavMenu";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ isAuth, setAuth }) => {
  // const navMenu = NavMenu.map(({ url, title }, index) => {
  //   return (
  //     <li key={index}>
  //       <NavLink to={url} activeclassname="active">
  //         {title}
  //       </NavLink>
  //     </li>
  //   );
  // });
  return (
    // <nav>
    // <div className="logo">Valstats</div>
    //   <div></div>
    //   <ul className="nav-menu">{navMenu}</ul>
    // </nav>
    <nav
      className="nav-container
    "
    >
      <div className="logo">Valstats</div>
      <div className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/maps">Maps</Link>
        <Link to="/statistics">Statistics</Link>
        {isAuth && <Link to="/profile">Profile</Link>}
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
