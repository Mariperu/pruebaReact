import React from "react";

export default function LocationCard({ personajes }) {
  return (
    <div className="row">
      {personajes.map((personaje, index) => (
        <div className="col-md-3" key={index}>
          <div className="card" style={{ maxWidth: "300px" }}>
            <img src={personaje.image} alt="" />
            <div className='card-body'>
              <h2 className='card-title'>{personaje.name}
              </h2>
              <hr />
              <p>Status:{personaje.status}</p>
              <p>Specie:{personaje.species}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
