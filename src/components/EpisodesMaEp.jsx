import React from "react";
const EpisodesMaEp = ({ episodes }) => {
  return (
    <>
      <section>
        {episodes.map((item, index) => (
          <section key={index}>
            <h3>{item.name}</h3>
            <p>Air date: {item.air_date}</p>
            <p>Episode: {item.episode}</p>
          </section>
        ))}
      </section>
    </>
  );
};
export { EpisodesMaEp };
