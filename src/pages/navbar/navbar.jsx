import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useDataContext } from "../../components/context/context";

function NavBar() {

  const {inputHandler} = useDataContext()

  const getActive = ({ isActive }) => ({
    color: isActive ? "red" : "white",
    textDecoraiton: isActive ? "underline" : "none",
    fontWeight: isActive ? "bold" : "",
  });

  return (
    <div className="navbar-container">
      <NavLink style={getActive} to="/">
        Meetup
      </NavLink>
      <input placeholder="Search by Title and Event tags" type="text" onChange={inputHandler} />
    </div>
  );
}

export default NavBar;
