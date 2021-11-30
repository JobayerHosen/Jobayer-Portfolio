import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <input id="nav-btn" hidden type="checkbox" />
      <nav className="nav">
        <label className="btn-nav" htmlFor="nav-btn">
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </label>

        <ul className="nav-menu">
          <li title="Home">
            <NavLink activeClassName="active" to="/home">
              <i className="bi bi-house-door-fill fs-5"></i>
            </NavLink>
          </li>
          <li title="About">
            <NavLink activeClassName="active" to="/about">
              <i className="bi bi-person-square fs-5"></i>
            </NavLink>
          </li>
          <li title="Projects">
            <NavLink activeClassName="active" to="/projects">
              <i className="bi bi-image-fill fs-5"></i>
            </NavLink>
          </li>
          <li title="Contact">
            <NavLink activeClassName="active" to="/contact">
              <i className="bi bi-envelope-check fs-5"></i>
            </NavLink>
          </li>
          <li title="Blog">
            <NavLink activeClassName="active" to="/blog">
              <i className="bi bi-receipt fs-5"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
