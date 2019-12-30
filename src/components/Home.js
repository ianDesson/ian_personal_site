import React from "react";
import ParticleComponent from "./ParticleComponent";

const Home = () => {
  return (
    <div className="home">
      <ParticleComponent />
      <div className="home-text">
        <h1 id="name">Ian Desson</h1>
        <h1 id="title">Full Stack Developer</h1>
      </div>
    </div>
  );
};
export default Home;
