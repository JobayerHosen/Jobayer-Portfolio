import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./About.css";
import aboutData from "../../data/about.json";

const About = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jobayerhosen.github.io/files/about.json")
      .then((res) => res.json())
      .then((data) => {
        setAbout(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const displayAbout = about || aboutData;
  const { personal, highlights, skills, experience, education, contact } = displayAbout;


  return (
    <>
      <section className="about">
        <Container className="about-container">
          <h1 className="section-title">About Me</h1>

          <Row className="about-hero">
            <Col xs={12} md={5} className="about-image-col">
              <div className="about-image-wrapper">
                {personal?.image ? <Image src={personal.image} alt="Jobayer Hosen" /> : <></>}
                <div className="about-image-overlay"></div>
              </div>
            </Col>

            <Col xs={12} md={6}>
              <div className="about-content">
                <h2 className="about-name">{personal.name}</h2>
                <p className="about-title">{personal.title}</p>

                <p className="about-intro">{personal.intro}</p>

                <p className="about-description">{personal.description}</p>

                <div className="about-highlights">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="about-highlight">
                      <span className="highlight-number">{highlight.number}</span>
                      <span className="highlight-label">{highlight.label}</span>
                    </div>
                  ))}
                </div>

                <div className="about-contact">
                  <NavLink to={contact.url}>
                    <button className="btn-contact">
                      <span>{contact.buttonText}</span>
                      <ArrowRight size={20} />
                    </button>
                  </NavLink>
                </div>
              </div>
            </Col>
          </Row>

          <div className="about-skills">
            <h2 className="section-subtitle">Skills & Technologies</h2>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-card">
                  <h3 className="skill-category">{skillGroup.category}</h3>
                  <div className="skill-items">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-experience">
            <h2 className="section-subtitle">Work Experience</h2>
            <div className="experience-timeline">
              {experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-marker"></div>
                  <div className="experience-content">
                    <div className="experience-header">
                      <h3 className="experience-company">{exp.company}</h3>
                      <span className="experience-period">{exp.period}</span>
                    </div>
                    <p className="experience-position">
                      {exp.position} • {exp.location}
                    </p>
                    <p className="experience-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-education">
            <h2 className="section-subtitle">Education</h2>
            <div className="education-item">
              <h3>{education.degree}</h3>
              <p>
                {education.institution} • {education.period}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
