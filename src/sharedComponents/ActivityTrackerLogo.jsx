import React from "react";
import { NavLink } from "react-router";

const ActivityTrackerLogo = () => {
  return (
    <NavLink to="/">
      <button className="btn btn-primary text-2xl font-bold">
        Activity <span className="text-accent">Tracker</span>
      </button>
    </NavLink>
  );
};

export default ActivityTrackerLogo;
