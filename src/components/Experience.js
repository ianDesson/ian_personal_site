import React from 'react';

const Experience = () => {

  return (
    <div className="text-description background-gradient slide">
      My Resume can be found here or if you want a quick overview:

      <h2>Field Effect Software</h2>
      At Field Effect, I mostly did automated testing with Python.<br/>
      My main project was to create a virtual network and test the threat detection capabilities of Covalence.<br/>
      This meant simulating various network attacks and varifying their detection in the product.<br/>

      <h2>Cision Inc.</h2>
      At Cision, I was the only QA automation developer for our tool called ZEN.<br/>
      ZEN was a REST API for providing analysis on all the published news articles in the world!<br/>
      In my spare time, I also helped work on the REST API using Java.<br/>

      <h2>Nuance Communications</h2>
      At Nuance, I primarily worked as a Front-End Developer working on Nuance Mix!<br/>
      My regular tasks involved implementing changes to the UI of the Mix Dashboard and NLU tools.<br/>
      I also developed a new library of our React components and its CI/CD in GitLab!<br/>
      Another project I worked on was an app for streaming files to the Mix REST API.<br/>
    </div>
  );
}

export default Experience;