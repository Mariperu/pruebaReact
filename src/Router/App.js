import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { CharacterD } from "../components/CharacterD.jsx";
import { CharacterR } from "../components/CharacterR.jsx";
import { EpisodesG } from "../components/EpisodesG.jsx";
import { EpisodesMa } from "../components/EpisodesMa.jsx";
import { LocationC } from "../components/LocationC.jsx";
import { LocationM } from "../components/LocationM.jsx";

import { CharacterDF } from "../componentsFirebase/CharacterDF.jsx";
import { CharacterRF } from "../componentsFirebase/CharacterRF.jsx";
import { EpisodesGF } from "../componentsFirebase/EpisodesGF.jsx";
import { EpisodesMaF } from "../componentsFirebase/EpisodesMaF.jsx";
import { LocationCF } from "../componentsFirebase/LocationCF.jsx";
import { LocationMF } from "../componentsFirebase/LocationMF.jsx";

import {LoginD} from "../componentsFirebase/LoginD.jsx";

import {FooterR} from '../components/FooterR.jsx'


//import { Button } from "react-bootstrap";
//import Button from "react-bootstrap/Button";
//import "./App.css";

function App() {
  // const [globalUser, setGlobalUser] = useState(null);
    
  // onAuthStateChanged(auth, (firebaseUser)=>{
  //   if(firebaseUser){
      //codigo en caso de que haya sesion iniciada
    //   setGlobalUser(firebaseUser)
    // } else{
      //codigo en caso no ay sesion inicicada
  //     setGlobalUser(null);
  //   }
  // })

  return (

    <><Router>


      <div className="App">
        <nav>
          <ul className='nav nav-pills justify-content-end'>
            <li className='nav-item'>
              <Link className='nav-link' to="/characters">Characters</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/episodes">Episodes</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/location">Location</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/charactersF">CharactersF</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/episodesF">EpisodesF</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/locationF">LocationF</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/characters"
            element={<>
              {" "}
              <CharacterD /> <CharacterR />{" "}
            </>} />
          <Route
            path="/episodes"
            element={<>
              {" "}
              <EpisodesG /> <EpisodesMa />{" "}
            </>} />
          <Route
            path="/location"
            element={
              <>
                {" "}
                <LocationC /> <LocationM />{" "}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {" "}
                <LoginD />{" "}
                
              </>
            }
          />
          <Route
            path="/charactersF"
            element={
              <>
                {" "}
                <CharacterDF />  <CharacterRF />{" "}
              </>
            }
          />

          <Route
            path="/episodesF"
            element={<>
              {" "}
              <EpisodesGF /> <EpisodesMaF />{" "}
            </>} />
          <Route
            path="/locationF"
            element={<>
              {" "}
              <LocationCF /> <LocationMF />{" "}
            </>} />
        </Routes>
      </div>
    </Router><FooterR /></>
  );
}

export default App;
