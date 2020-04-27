import React from "react";

const NavBar = () => {
  const [value, setValue] = React.useState(0);

  const Tabs = () => {
    const content = ["About", "Experience", "Projects"];
    return content.map((text, index) => {
      return (
        <div
          onClick={() => setValue(index)}
          className={index === value ? "selected" : ""}
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
