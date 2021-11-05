import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Character from "../components/Character.jsx";
//import { CharacterR } from "../components/CharacterR.jsx";
import { Location } from "../components/Location.jsx";
import { Episode } from "../components/Episode.jsx";
import nav from "../components/nav.jsx";

//import { Button } from "react-bootstrap";
//import Button from "react-bootstrap/Button";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact>
            <Character />
          </Route>

          <Route exact path="/episode" component={Episode} />

          <Route exact path="/nav" component={nav} />

          <Route path="/products">
            <Location />
          </Route>
        </Routes>
      </div>
    </Router>

    // <Router>
    //   <Routes>
    //     <Route exact path="/" component={Character} />
    //     <Route path="/menu" component={CharacterR} />
    //     <Route path="/cook" component={Episode} />
    //     <Route path="*" component={Location} />
    //   </Routes>
    // </Router>
  );
}

export default App;
