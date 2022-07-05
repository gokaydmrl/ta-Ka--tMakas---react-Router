import React from "react";
import { NavLink } from "react-router-dom";
import About from "./About";

const Menu = () => {
  let activeStyle = {
    color: "red",
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="about"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              See Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/game"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Game
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
