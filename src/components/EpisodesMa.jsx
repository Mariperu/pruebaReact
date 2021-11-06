import React, { useState, useEffect } from "react";
//import { EpisodesMaEp } from "./EpisodesMaEp.jsx";
import { EpisodesMaSort } from "./EpisodesMaSort.jsx";

const EpisodesMa = () => {
  //HOOK, Para guardar y usar api como estado
  const [epis, setEpis] = useState([]); // array;

  //estado para sort
  //const [sortEp, setSortEp] = useState();

  //const urlAPI = "https://rickandmortyapi.com/api/character";
  const urlAPI = "https://rickandmortyapi.com/api/episode";
  const requestAPI = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setEpis(data.results))
      .catch((err) => console.log(err));
  };
  //HOOK useEffect: para ejecutar una sola vez []
  useEffect(() => {
    requestAPI(urlAPI);
  }, []);
  return (
    <>
      <p>Maritza</p>

      {/* <EpisodesMaEp episodes={epis} /> */}
      <EpisodesMaSort episodes={epis} />
    </>
  );
};
export { EpisodesMa };
