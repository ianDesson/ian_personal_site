import React from "react";

import ParticleComponent from "./components/ParticleComponent";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  const [selectedNavIndex, setSelectedNavIndex] = React.useState(0);
  const selectedComponent = [<AboutMe />, <Experience />, <Projects />]
  return (
    <div className="App">
      <div className="content">
        <ParticleComponent />
        <Home />
        <NavBar
          selectedIndex={selectedNavIndex}
          setSelectedIndex={setSelectedNavIndex}
        />
        {selectedComponent[selectedNavIndex]}
      </div>
    </div>
  );
}

export default App;
