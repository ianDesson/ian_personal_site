import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FileIcon from "@material-ui/icons/InsertDriveFile";
import Waves from "./Waves";

import resume from "../resources/ianDessonResume.pdf";

const Home = () => {
  return (
    <>
      <div className="middle-column">
        <h1 id="name">Ian Desson</h1>
        <h1 id="title">Full Stack Developer</h1>
        <div className="page-links">
          <a
            href="https://github.com/ianDesson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon titleAccess="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/ian-desson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon titleAccess="LinkedIn" />
          </a>
          <a href={resume} without rel="noopener noreferrer" target="_blank">
            <FileIcon titleAccess="Resume" />
          </a>
        </div>
      </div>
    </>
  );
};
export default Home;
