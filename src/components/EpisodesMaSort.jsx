import React, { useState } from "react";
import { EpisodesMaEp } from "./EpisodesMaEp.jsx";

const EpisodesMaSort = ({ episodes }) => {
  const [sortEpis, setSortEpis] = useState(null);

  //console.log(sortedField);
  //let sortedEpisodes = [...episodes];
  //   const orderName = (select, episodes) => {
  //     if (select === "az") {
  //       episodes.sort((a, b) => (a[sortEpis] < b[sortEpis] ? -1 : 1));
  //     } else {
  //       episodes.sort((a, b) => (a[sortEpis] > b[sortEpis] ? -1 : 1));
  //     }
  //   };

  //   const orderName = (select, episodes) => {
  //     if (select === "az") {
  //       episodes.sort((a, b) => (a.name < b.name ? -1 : 1));
  //     } else {
  //       episodes.sort((a, b) => (a.name > b.name ? -1 : 1));
  //     }
  //   };

  episodes.sort((a, b) => (a[sortEpis] < b[sortEpis] ? -1 : 1));

  return (
    <>
      <section>
        <button type="button" onClick={() => setSortEpis("name")}>
          Sort AZ
        </button>

        {/* <button type="button" onClick={() => orderName("az", episodes)}>
          Sort by AZ
        </button>
        <button type="button" onClick={() => orderName("za", episodes)}>
          Sort by ZA
        </button> */}

        {/* <select id="orderByNumber">
          <option value="" href="" selected disabled>
            Sort by:
          </option>
          <option value="az" href="">
            A-Z
          </option>
          <option value="za" href="">
            Z-A
          </option>
        </select> */}

        <EpisodesMaEp episodes={episodes} />
      </section>
    </>
  );
};

export { EpisodesMaSort };
