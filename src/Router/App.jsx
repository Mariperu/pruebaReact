import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CharacterD } from '../components/CharacterD.jsx';
import { CharacterR } from '../components/CharacterR.jsx';
import { EpisodesG } from '../components/EpisodesG.jsx';
import { EpisodesMa } from '../components/EpisodesMa.jsx';
import { LocationC } from '../components/LocationC.jsx';
import { LocationM } from '../components/LocationM.jsx';

//import { Button } from "react-bootstrap";
//import Button from "react-bootstrap/Button";
//import "./App.css";

function App() {
  return (
  
<Router>
      <div className="App">

        <nav>
          <ul>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/episodes">Episodes</Link>
            </li>
            <li>
              <Link to="/location">Location</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/characters" element={<> <CharacterD /> < CharacterR /> </>} />
        <Route path="/episodes" element={<> < EpisodesG /> < EpisodesMa /> </>} />
        <Route path="/location" element={<> < LocationC /> < LocationM /> </>} />
          
        </Routes>
      </div>
  </Router>

  );
}

export default App;
