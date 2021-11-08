import React, { useState, useEffect } from "react";
import Axios from "axios";
import LocationCard from "./LocationCard";
import PageLocationM from "./PageLocationM";
import ImputLocationM from "./ImputLocationM";

const LocationM = () => {
  const [personajes, setPersonajes] = useState([])
  const [cards, setCards] = useState([])
  const [info, setInfo] = useState({})
  const [search, setSearch] = useState("")

  const inicialUrl = "https://rickandmortyapi.com/api/character"

  const consultData = (url) => {
    Axios.get(url).then((response) => {
      console.log(response, "mel");
      setPersonajes(response.data.results);
      setCards(response.data.results);
      setInfo(response.data.info);
    });
  }
  useEffect(() => {
    consultData(inicialUrl)
  }, []);
  console.log(personajes);

  const onPrevious = () => {
    consultData(info.prev);
  };

  const onNext = () => {
    consultData(info.next);
  };

  const pageChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
    FilterPersonajes(e.target.value);
  };
  const FilterPersonajes = (word) => {
    const result = cards.filter((item) => {
      const personajesFiltered = item.name
        .toString()
        .toLowerCase()
        .includes(word.toLowerCase());
      return personajesFiltered;
    });
    setPersonajes(result);
  };
  return (
    <div className="container">
      <ImputLocationM pageChange={pageChange} />
      <PageLocationM
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <LocationCard personajes={personajes} />
    </div>
  );
};
export { LocationM };
