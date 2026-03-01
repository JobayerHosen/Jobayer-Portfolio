import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Projects.css";
import projectsData from "../../data/projects.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jobayerhosen.github.io/files/project.json")
      .then((res) => res.json())
      .then((p) => {
        setProjects(p);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const displayProjects = projects.length > 0 ? projects : projectsData;

  return (
    <section className="projects">
      <Container className="projects-container">
        <h1 className="section-title">Featured Projects</h1>
        <p className="projects-subtitle">
          A selection of projects showcasing my expertise in building scalable web and mobile applications
        </p>

        <Row className="projects-grid">
          {displayProjects.map((project) => (
            <Col key={project?.id || project.id} xs={12} className="project-col">
              <div className="project-card">
                <div className="project-image">
                  <img src={project?.img?.[0] || project.image} alt={project?.title || project.title} />
                  <div className="project-overlay">
                    <div className="project-actions">
                      {project?.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn primary"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          <span>Live</span>
                        </a>
                      )}
                      <a
                        href={project?.github || project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn secondary"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <NavLink to={`/project-details/${project?.id || project.id}`}>
                    <h3 className="project-title">{project?.title || project.title}</h3>
                  </NavLink>
                  <p className="project-description">{project?.desc || project.description}</p>
                  <div className="project-tech">
                    {(project?.techs?.split(", ") || project.tech).slice(0, 4).map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="projects-cta">
          <NavLink to="/contact" className="btn-cta">
            <span>Let's work together</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </NavLink>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
