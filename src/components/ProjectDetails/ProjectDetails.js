import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ExternalLink, Github, ArrowLeft, ArrowRight } from "lucide-react";
import "./ProjectDetails.css";
import projectsData from "../../data/projects.json";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try external fetch first, fallback to local data
    fetch("https://jobayerhosen.github.io/files/project.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        const foundProject = data.find((p) => p.id === parseInt(id));
        if (foundProject) {
          setProject(foundProject);
          setLoading(false);
        } else {
          throw new Error("Project not found");
        }
      })
      .catch(() => {
        // Fallback to local data
        const localProject = projectsData.find((p) => p.id === parseInt(id));
        setProject(localProject || null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <section className="project-details">
        <Container className="project-details-container">
          <div className="project-details-loading">
            <div className="loading-spinner"></div>
          </div>
        </Container>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="project-details">
        <Container className="project-details-container">
          <div className="project-not-found">
            <h1>Project Not Found</h1>
            <Link to="/projects" className="btn-back">
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const featuresList = project.features ? project.features.split("|").map(f => f.trim()) : [];

  return (
    <section className="project-details">
      <Container className="project-details-container">
        {/* Back Button */}
        <Link to="/projects" className="btn-back">
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="project-header">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-description">{project.desc}</p>

          {/* Action Buttons */}
          <div className="project-actions">
            {project.live && project.live !== "#" && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-project primary">
                <ExternalLink size={20} />
                <span>View Live</span>
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-project secondary">
              <Github size={20} />
              <span>View Code</span>
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="project-tech-section">
          <h2 className="section-subtitle">Technologies Used</h2>
          <div className="project-tech-tags">
            {project.techs?.split(", ").map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        {/* Features */}
        {featuresList.length > 0 && (
          <div className="project-features">
            <h2 className="section-subtitle">Key Features</h2>
            <div className="features-list">
              {featuresList.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-bullet"></div>
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Gallery */}
        {project.img && project.img.length > 0 && (
          <div className="project-gallery">
            <h2 className="section-subtitle">Project Gallery</h2>
            <div className="gallery-grid">
              {project.img.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`${project.title} - Screenshot ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects CTA */}
        <div className="project-cta">
          <h2>Interested in collaborating?</h2>
          <p>Let's build something amazing together</p>
          <Link to="/contact" className="btn-cta">
            <span>Get in Touch</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ProjectDetails;
