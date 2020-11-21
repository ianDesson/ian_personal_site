import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ selectedIndex }) => {
  const [currentTab, setCurrentTab] = React.useState(selectedIndex);
  const Tabs = () => {
    const content = ["Home", "About", "Experience"];
    return content.map((text, index) => {
      return (
        <Link to={`/${text.toLowerCase()}`}>
          <div
            onClick={() => setCurrentTab(index)}
            className={index === currentTab ? "selected" : ""}
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
      <Tabs />
    </div>
  );
};

export default NavBar;
