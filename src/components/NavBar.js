import React from "react";
import { Link } from "react-router-dom";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const NavBar = ({ selectedIndex }) => {
  const [currentTab, setCurrentTab] = React.useState(selectedIndex);
  const Tabs = () => {
    const content = ["Home", "About", "Experience"];
    return content.map((text, index) => {
      return (
        <Link to={`/${text.toLowerCase()}`}>
          <div
            onClick={() => setCurrentTab(index)}
            className={"tab " + (index === currentTab ? "selected" : "")}
          >
            <span id="nav-text">{text}</span>
            <div id="bottom-bar" />
          </div>
        </Link>
      );
    });
  };

  return (
    <div className="nav-bar">
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
      <div className="tab-grouping">
        <Tabs />
      </div>
    </div>
  );
};

export default NavBar;
