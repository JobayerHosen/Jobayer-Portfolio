import React from "react";
import { NavLink } from "react-router-dom";
import "./Socials.css";

const Socials = () => {
  return (
    <div className="socials">
      <ul className="socials-menu">
        <li>
          <a target="_blank" href="https://github.com/JobayerHosen">
            <i className="bi bi-github fs-5"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/jobayer-hosen" target="_blank">
            <i className="bi bi-linkedin fs-5"></i>
          </a>
        </li>
        <li>
          <a href="https://facebook.com/md.jubaier.315" target="_blank">
            <i className="bi bi-facebook fs-5"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
