import React from "react";

import Card from "../Card";
import text from './aboutMeText';


const AboutMe = () => {
  return (
    <div>
      <h2>About Me</h2>
      <div className="card-grid">
        {text.map((item) => {
          return <Card frontContent={item.front} backContent={item.back} />;
        })}
      </div>
    </div>
  );
};

export default AboutMe;
