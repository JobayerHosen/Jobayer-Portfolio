import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./About.css";
import propic from "../../images/pp-faceretouch_sq.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="about">
        <Container>
          <h1 className="section-title">About Me</h1>
          <Row>
            <Col xs={12} md={5}>
              <div className="img-wrapper">
                <img src={propic} alt="" />
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="about-texts">
                <h1 className="text-cursive mb-3">JOBAYER HOSEN</h1>
                <p>
                  A passionate Front End Web Developer who has the ability to work both independently and
                  collaboratively in a fast-paced, multi-tasking environment, as well as a strong desire to learn new
                  technologies. Make every effort to write code that is clean, concise, and efficient. Code that
                  reflects a good user experience and makes lives better. I am looking forward to implementing my
                  current skills and knowledge in a friendly environment with a team of great software engineers and
                  further enriching my knowledge in the field of software engineering.
                </p>
                <p>
                  Over the past years, I have gained hands-on experience building several highly responsive web
                  applications using JavaScript, React, Node.js, Express, MongoDB, Firebase, Bootstrap, CSS, etc. I am
                  familiar with Material UI, Tailwind CSS, XHR, Axios, MySQL, etc.
                </p>
                <div>
                  <NavLink to="/contact">
                    <Button variant="success" className="text-cursive bg-green fw-bold rounded-pill">
                      Contact Me
                    </Button>
                  </NavLink>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* <Container>
          <h1 className="section-title my-5">Skills</h1>
        </Container> */}
      </section>
    </>
  );
};

export default About;
