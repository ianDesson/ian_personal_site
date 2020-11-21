import React from "react";

import NavBar from "./NavBar";
import uottawa from "../resources/images/uottawa.png";
import nuance from "../resources/images/nuance.png";
import cision from "../resources/images/cision.png";
import fieldEffect from "../resources/images/fieldEffect.png";
import resume from "../resources/ianDessonResume.pdf";

const Experience = () => {
  return (
    <div>
      <NavBar selectedIndex={2} />
      <div className="text-description background-gradient slide">
        <p>
          My Resume can be found{" "}
          <a href={resume} without rel="noopener noreferrer" target="_blank">
            here
          </a>{" "}
          or if you want a quick overview: <br />
        </p>
        <div>
          <h2>
            University of Ottawa <img src={uottawa} alt="uOttawa" />
          </h2>
          I worked as a Software Developer for the University of Ottawa working
          on the Ventus tool.
          <br />
          This involved working with the Full-Stack of a web app for giving
          students accommodations for their courses and exams.
          <br />
        </div>
        <div>
          <h2>
            Nuance Communications <img src={nuance} alt="Nuance" />
          </h2>
          At Nuance, I primarily worked as a Front-End Developer working on
          Nuance Mix!
          <br />
          My regular tasks involved implementing changes to the UI of the Mix
          Dashboard and NLU tools.
          <br />
          I also developed a new library of our React components and its CI/CD
          in GitLab!
          <br />
          Another project I worked on was an app for streaming files to the Mix
          REST API.
          <br />
        </div>
        <div>
          <h2>
            Cision Inc. <img src={cision} alt="Cision" />
          </h2>
          At Cision, I was the only QA automation developer for our tool called
          ZEN.
          <br />
          ZEN was a REST API for providing analysis on all the published news
          articles in the world!
          <br />
          In my spare time, I also helped work on the REST API using Java.
          <br />
        </div>
        <div>
          <h2>
            Field Effect Software <img src={fieldEffect} alt="Field Effect" />
          </h2>
          At Field Effect, I mostly did automated testing with Python.
          <br />
          My main project was to create a virtual network and test the threat
          detection capabilities of Covalence.
          <br />
          This meant simulating various network attacks and varifying their
          detection in the product.
          <br />
        </div>
      </div>
    </div>
  );
};

export default Experience;
