import React from "react";

import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/About">
          <AboutMe />
        </Route>
        <Route exact path="/Experience">
          <Experience />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
