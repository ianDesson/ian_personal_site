import React from "react";

import ParticleComponent from "./components/ParticleComponent";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <ParticleComponent />
      <div className="content">
        <Home />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
