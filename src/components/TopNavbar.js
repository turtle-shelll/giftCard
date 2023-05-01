import React from "react";
import "./componentsCss/navbar.css";

import { Menu, Person } from "@mui/icons-material";

export default function TopNavbar() {
  return (
    <div className="navbar">
      <span className="PersonBtn">
        <Person style={{ color: "#e5e5e5" }} />
      </span>
      <span className="menuBtn">
        <Menu style={{ color: "#e5e5e5" }} />
      </span>
    </div>
  );
}
