import React from 'react';

import SchoolIcon from "@material-ui/icons/School";
import DevicesIcon from "@material-ui/icons/Devices";
import SportsIcon from "@material-ui/icons/SportsMotorsports";
import LanguagesIcon from "@material-ui/icons/Language";

const text = [
  {
    front: (
      <>
        <SchoolIcon titleAccess="Education"/>
      </>
    ),
    back: (
      <>
        I study Software Engineering at the University of Ottawa
        <br />
        <br />
        My expected graduation date is in December of 2021
      </>
    ),
  },
  {
    front: (
      <>
        <DevicesIcon titleAccess="Technology"/>
      </>
    ),
    back: (
      <>
        I've learned Java, JavaScript and Python
        <br />
        <br />
        I've professionally used React, SASS and Spring during my internships
        <br />
        <br />
        Some technologies I know are: Git, PostgreSQL, and Docker
      </>
    ),
  },
  {
    front: (
      <>
        <SportsIcon titleAccess="Hobbies"/>
      </>
    ),
    back: (
      <>
        I enjoy playing video games with my friends in my spare time.
        <br />
        <br />
        With sports, I watch Formula 1 racing every race weekend and love to
        play soccer
        <br />
        <br />
        Lastly, I do powerlifting multiple times a week to stay in shape.
      </>
    ),
  },
  {
    front: (
      <>
        <LanguagesIcon titleAccess="Languages"/>
      </>
    ),
    back: (
      <>
        I consider myself bilingual in English and French!
        <br />
        <br />
        I learned French from Grade 3 to 12 in Ontario's French immersion
        program.
        <br />
        <br />
        I'm also currently studying Chinese and Japanese
      </>
    ),
  },
];
export default text;