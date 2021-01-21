import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FirstName } from "../editable-stuff/configurations.json";


const Navbar = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-light justify-content-center `}
    >


        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              <b>About</b>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              <b>Projects</b>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#contact"}
            >
              <b>Contact</b>
            </a>
          </li>
        </ul>

    </nav>
  );
};

export default Navbar;
