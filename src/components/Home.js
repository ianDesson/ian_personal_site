import React from "react";
import ParticleComponent from "./ParticleComponent";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Home = () => {
  return (
    <div className="home">
      <ParticleComponent />
      <div className="home-text">
        <h1 id="name">Ian Desson</h1>
        <h1 id="title">Full Stack Developer</h1>
        <div className="page-links">
          <a>Projects</a>
          <a href="#about-me">About Me</a>
          <a href="https://github.com/ianDesson">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/ian-desson/">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
