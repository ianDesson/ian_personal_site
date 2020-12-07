import React from "react";

import Card from "../Card";
import experiences from './experiences.js';

const Experience = () => {
  return (
    <div>
      <p>
        My Resume can be found by clicking the file icon above
        <br />
        You can also click the cards below for a quick overview
      </p>
      <div className="experiences">
        {experiences.map((exp) => {
          return <Card frontContent={exp.front} backContent={exp.back} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
