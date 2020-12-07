import React from 'react';

import uottawa from "../../resources/images/uottawa.png";
import nuance from "../../resources/images/nuance.png";
import cision from "../../resources/images/cision.png";
import fieldEffect from "../../resources/images/fieldEffect.png";

const experiences = [
  {
    front: (
      <>
        <img src={uottawa} alt="uOttawa" />
        <br />
        <h3>Apr - Aug, 2020</h3>
      </>
    ),
    back: (
      <>
        I worked as a Software Developer for the University of Ottawa working on
        the Ventus tool.
        <br />
        <br />
        This involved working with the Full-Stack of a web app for giving
        students the accommodations for their courses and exams.
      </>
    ),
  },
  {
    front: (
      <>
        <img src={nuance} alt="Nuance" />
        <br />
        <h3>Sept - Dec, 2019</h3>
      </>
    ),
    back: (
      <>
        At Nuance, I primarily worked as a Front-End Developer working on Nuance
        Mix!
        <br />
        <br />
        My regular tasks involved implementing changes to the UI of the Mix
        Dashboard and NLU tools.
        <br />
        <br />
        I also developed a new library of our React components and its
        CI/CD in GitLab!
      </>
    ),
  },
  {
    front: (
      <>
        <img src={cision} alt="Cision" />
        <br />
        <h3>Jan - Apr, 2019</h3>
      </>
    ),
    back: (
      <>
        At Cision, I was the only QA automation developer for our tool called
        ZEN.
        <br />
        <br />
        ZEN was a REST API for providing analysis on all the published news
        articles in the world!
        <br />
        <br />
        In my spare time, I also helped work on the REST API using Java.
      </>
    ),
  },
  {
    front: (
      <>
        <img src={fieldEffect} alt="Field Effect" />
        <h2>
          Field Effect
        </h2>
        <h3>Apr - Aug, 2018</h3>
      </>
    ),
    back: (
      <>
        At Field Effect, I mostly did automated testing with Python.
        <br />
        <br />
        My main project was to create a virtual network and test the threat
        detection capabilities of Covalence.
        <br />
        <br />
        This meant simulating various network attacks and verifying their
        detection in the product.
      </>
    ),
  },
];

export default experiences;