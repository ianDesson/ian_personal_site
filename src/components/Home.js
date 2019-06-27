import React from "react";
import ParticleComponent from "./ParticleComponent";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  return (
    <div className="home">
      <ParticleComponent />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ position: "absolute", top: "40%" }}
      >
        <div id="home-text">
          <h1>Hi, I'm Ian Desson.</h1>
          <h1>I'm a Full Stack Developer!</h1>
        </div>
      </Grid>

    </div>
  );
};
export default Home;
