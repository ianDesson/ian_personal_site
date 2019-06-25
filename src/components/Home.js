import React from "react";
import ParticleComponent from './ParticleComponent';


const Home = () => {
  return (
    <div className="home">
      <ParticleComponent />
      <div style={{
        position: "absolute"
      }}>
        <h2>Hi</h2>
      </div>
    </div>
  );
};
export default Home;