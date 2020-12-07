import React from "react";

import Card from "../Card";
import experiences from './experiences.js';

const Experience = () => {
  return (
    <div>
      <p>
        You can click the cards for more info!
      </p>
      <div className="card-grid">
        {experiences.map((exp) => {
          return <Card frontContent={exp.front} backContent={exp.back} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
