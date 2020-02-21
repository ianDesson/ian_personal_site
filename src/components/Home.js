import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Home = () => {
  return (
    <div className="home">
      <div className="home-text">
        <h1 id="name">Ian Desson</h1>
        <h1 id="title">Full Stack Developer</h1>
        <div className="page-links">
          <a
            href="https://github.com/ianDesson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ian-desson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
