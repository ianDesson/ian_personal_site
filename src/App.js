import React from "react";

import ParticleComponent from "./components/ParticleComponent";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <ParticleComponent />
      <div className="content">
        <Home />
        <NavBar />
      </div>
    </div>
  );
}

export default App;
