import React from "react";
import logo from "./logo.svg";
import { Person, ListOfPeople, Sample, Basic } from "./Basic";
import { Class } from "./Class";
import { Lists } from "./Lists";
import { Rendering } from "./Rendering";
import { Reactive } from "./Reactive";
import { Stateful } from "./Stateful";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <h3>Samples</h3>
      <Router>
        <div>
          <Switch>
            <Route path="/basic">
              <Basic />
            </Route>
            <Route path="/class">
              <Class />
            </Route>
            <Route path="/lists">
              <Lists />
            </Route>
            <Route path="/reactive">
              <Reactive />
            </Route>
            <Route path="/rendering">
              <Rendering />
            </Route>
            <Route path="/stateful">
              <Stateful />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Basic">Basic</Link>
        </li>
        <li>
          <Link to="/Class">Class</Link>
        </li>
        <li>
          <Link to="/Lists">Lists</Link>
        </li>
        <li>
          <Link to="/Reactive">Reactive</Link>
        </li>
        <li>
          <Link to="/Rendering">Rendering</Link>
        </li>
        <li>
          <Link to="/Stateful">Stateful</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
