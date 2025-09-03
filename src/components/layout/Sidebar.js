import React from "react";
import ReactDOM from "react-dom"
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
      <NavLink
        to="/"
        exact
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/companies"
        exact
      >
        Companies
      </NavLink>
      <NavLink
        to="/contacts"
        exact
      >
        Contacts
      </NavLink>
      <NavLink
        to="/deals"
        exact
      >
        Deals
      </NavLink>
      <NavLink
        to="/tasks"
        exact
      >
        Tasks
      </NavLink>
      <NavLink
        to="/reports"
        exact
      >
        Reports
      </NavLink>
      <NavLink
        to="/settings"
        exact
      >
        Settings
      </NavLink>
      <NavLink
        to="/login"
        exact
      >
        Login
      </NavLink>
    </div>
  )
}

export default Sidebar;