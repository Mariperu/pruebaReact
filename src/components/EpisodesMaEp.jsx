import React from "react";
const EpisodesMaEp = ({ episodes }) => {
  return (
    <>
      <section className="row">
        {episodes.map((item, index) => (
          <section className="col-sm-3">
            <section className="card" style={{ width: "18rem" }}>
              <section className="card-body" key={index}>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Air date: {item.air_date}</p>
                <p className="card-text">Episode: {item.episode}</p>
              </section>
            </section>
          </section>
        ))}
      </section>
    </>
  );
};
export { EpisodesMaEp };
