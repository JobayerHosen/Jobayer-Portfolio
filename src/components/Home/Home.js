import React from "react";
import { Button } from "react-bootstrap";
import Socials from "../Socials/Socials";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Socials />

      <div className="intro">
        <div className="texts">
          <h1 className="name text-cursive mb-0">Jobayer Hosen</h1>
          <h3 className="role mt-0 mb-5">Fron-End Developer</h3>
          <a href="https://drive.google.com/file/d/1HoUJcMJzzXJ5hjYd_gAChfHb5BzYVob_/view?usp=sharing" target="_blank">
            <Button variant="success" className="bg-green fw-bold rounded-pill">
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
