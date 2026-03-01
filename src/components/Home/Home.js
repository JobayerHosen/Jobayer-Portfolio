import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { SiReact, SiExpo } from "react-icons/si";
import { RiJavascriptFill, RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Socials from "../Socials/Socials";
import "./Home.css";
import homeData from "../../data/home.json";
import { TbBrandTypescript } from "react-icons/tb";

const techIcons = {
  react: <FaReact size={24} />,
  nextjs: <RiNextjsLine size={24} />,
  "react-native": <SiReact size={24} />,
  expo: <SiExpo size={24} />,
  typescript: <TbBrandTypescript size={24} />,
  javascript: <RiJavascriptFill size={24} />,
  tailwind: <RiTailwindCssFill size={24} />,
  docker: <FaDocker size={24} />,
  github: <FaGithub size={24} />,
};

const Home = () => {
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jobayerhosen.github.io/files/home.json")
      .then((res) => res.json())
      .then((data) => {
        setHome(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const displayHome = home || homeData;
  const { hero } = displayHome;

  return (
    <div className="home">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>

      <Socials />

      <div className="hero-content">
        <div>
          <div className="hero-badge">
            <span className="badge-dot"></span>
            {hero.badge.text}
          </div>

          <h1 className="hero-title">
            <span className="hero-greeting">{hero.greeting}</span>
            <span className="hero-name">{hero.name}</span>
          </h1>

          <p className="hero-subtitle">{hero.summary}</p>

          <div className="hero-actions">
            {hero.actions.map((action, index) => {
              const isExternal = action.url.startsWith("http");
              const ButtonComponent = isExternal ? "a" : NavLink;
              const buttonProps = isExternal
                ? { href: action.url, target: "_blank", rel: "noopener noreferrer" }
                : { to: action.url };

              return (
                <ButtonComponent key={index} {...buttonProps} className={`btn-${action.type}`}>
                  <span>{action.label}</span>
                  {action.type === "primary" ? <Download size={20} /> : <ArrowRight size={20} />}
                </ButtonComponent>
              );
            })}
          </div>

          <div className="hero-tech-stack">
            {hero.techStack.map((tech, index) => (
              <React.Fragment key={index}>
                <div className="tech-item">
                  <div className="tech-icon">{techIcons[tech.icon]}</div>
                  <span className="tech-name">{tech.name}</span>
                </div>
                {index < hero.techStack.length - 1 && <div className="tech-divider"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* <div className="hero-scroll">
          <div className="scroll-indicator">
            <span>{hero.scrollText}</span>
            <div className="scroll-arrow"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
