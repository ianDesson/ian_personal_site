import React from "react";

const NavBar = ({selectedIndex, setSelectedIndex}) => {

  const Tabs = () => {
    const content = ["About", "Experience", "Projects"];
    return content.map((text, index) => {
      return (
        <div
          onClick={() => setSelectedIndex(index)}
          className={index === selectedIndex ? "selected" : ""}
        >
          <span id="nav-text">{text}</span>
          <div id="bottom-bar" />
        </div>
      );
    });
  };

  return (
    <div class="nav-bar">
      <Tabs />
    </div>
  );
};

export default NavBar;
