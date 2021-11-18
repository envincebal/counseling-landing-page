import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-links">
        <Link to={"/"} className="nav-item">
          HOME
        </Link>
        <Link to={"/about"} className="nav-item">
          ABOUT
        </Link>
        <Link to={"/specialty"} className="nav-item">
          SPECIALTY
        </Link>
        <Link to={"/rates"} className="nav-item">
          RATES AND INSURANCE
        </Link>
        <Link to={"/contact"} className="nav-item">
          CONTACT
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
