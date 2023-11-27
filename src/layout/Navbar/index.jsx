import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  return (
    <navbar>

      
      <NavLink activeClassName="active" className={"navbar-logo"} to="/">
      <h3>Dazzling Demo</h3>
        </NavLink>
      <div className="navbar-container">
        <NavLink activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/gallery">
          Gallery
        </NavLink>
        <NavLink activeClassName="active" to="/shortCodes">
          ShortCodes
        </NavLink>

        <a>
          About
          <span className="down-arrow"></span>
          <ul>
            <li>
              <NavLink activeClassName="active" to="/pageMarkup">
                &nbsp;Page Markup And Formatting
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contactForm">
                &nbsp; Contact Form
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/pageImage">
                &nbsp; Page Image Alignment (Full-Width)
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/clearingFloats">
                &nbsp; Clearing Floats
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/pageComments">
                &nbsp; Page with comments
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/disabledComments">
                &nbsp; Page with comments disabled
              </NavLink>
            </li>
            
          </ul>
        </a>
        <NavLink activeClassName="active" to="/languages">
          Languages
        </NavLink>
      </div>
    </navbar>
  );
};

export default Navbar;
