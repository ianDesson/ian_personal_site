import React from "react";
import Grid from "@material-ui/core/Grid";

const Projects = () => (
  <div className="projects background-gradient slide">
    <Grid container justify="center" alignItems="center">
      <Grid item xs={6} className="project">
        <h2>Ascii Bot</h2>
        <p>
          This is a Discord Bot used in a shared server with my friends for
          playing Battleship!
        </p>
      </Grid>
      <Grid item xs={6} className="project">
        <h2>
          <a href="https://pwdgenerator.netlify.app">Password Generator</a>
        </h2>
        <p>
          This simple react app will generate a password given specific
          parameters.
        </p>
      </Grid>
    </Grid>
  </div>
);
export default Projects;
