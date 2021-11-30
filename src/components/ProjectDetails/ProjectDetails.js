import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Container, Row, Button } from "react-bootstrap";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://jobayerhosen.github.io/files/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => err);
  }, []);
  console.log(id);

  return (
    <div className="about text-start">
      <Container>
        <h1 className="text-green">{projects[id]?.title}</h1>
        <p style={{ maxWidth: "700px" }} className="me-auto">
          {projects[id]?.desc}
        </p>

        <h6>Features:</h6>
        <ul>
          {projects[id]?.features?.split("|").map((feat) => (
            <li>{feat}</li>
          ))}
        </ul>

        <h6>Technology Used: {projects[id]?.techs}</h6>
        <br />

        <h2>
          <a href={projects[id]?.live}>Live</a> | <a href={projects[id]?.github}>Github</a>
        </h2>

        <div className="w-100">
          {projects[id]?.img.map((image) => (
            <img className="mb-3 w-100 mx-auto" src={image} alt="" />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetails;
