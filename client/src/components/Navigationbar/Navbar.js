import React from "react";
import "./Navbar.css";
import { NavMenu } from "./NavMenu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navMenu = NavMenu.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });
  return (
    <nav>
      <div className="logo">Valstats</div>
      <div></div>
      <ul className="nav-menu">{navMenu}</ul>
    </nav>
  );
};

export default Navbar;
