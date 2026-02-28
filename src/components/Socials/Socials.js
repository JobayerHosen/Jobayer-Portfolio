import React, { useEffect, useState } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { LuLinkedin } from "react-icons/lu";
import { TbBrandHackerrank } from "react-icons/tb";
import "./Socials.css";
import socialData from "../../data/socials.json";

const Socials = () => {
  const [socials, setSocials] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jobayerhosen.github.io/files/socials.json")
      .then((res) => res.json())
      .then((data) => {
        setSocials(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const displaySocials = socials || socialData;
  const { socialLinks } = displaySocials;

  const icons = {
    github: <VscGithubInverted size={20} />,
    linkedin: <LuLinkedin size={20} />,
    hackerrank: <TbBrandHackerrank size={20} />
  };

  return (
    <div className="socials">
      <div className="socials-list">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={social.name}
          >
            {icons[social.icon]}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
