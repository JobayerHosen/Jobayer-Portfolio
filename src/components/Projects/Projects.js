import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import propic from "../../images/pp-faceretouch_sq.jpg";
import { NavLink } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://jobayerhosen.github.io/files/project.json")
      .then((res) => res.json())
      .then((p) => setProjects(p))
      .catch((err) => err);
  }, []);

  return (
    <>
      <section className="projects">
        <h1 className="section-title">My Projects</h1>
        <Row className="px-3">
          {projects.map((project) => (
            <Col key={project?.id} className="p-0" xs={12} md={6} lg={6}>
              <div className="project-item">
                <img src={project?.img[0]} alt="" />
                <div className="overlay">
                  <div className="project-info">
                    <h2>{project.title}</h2>
                    <div className="text-start text-black">
                      <span className="fs-6 me-2">
                        <NavLink to={`/project-details/${project?.id}`}>Details</NavLink>
                      </span>
                      <span>
                        <a href={project?.github} target="_blank">
                          <i className=" fs-6 bi bi-github"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <a href={project?.live} target="_blank" className="project-preview">
                    <i className="bi bi-eye-fill"></i>
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* <Container>
          <h1 className="section-title my-5">Skills</h1>
        </Container> */}
      </section>
    </>
  );
};

export default Projects;
