import React, { useState } from "react";
import { EpisodesMaEp } from "./EpisodesMaEp.jsx";

//Esta es mi función para reutilizar `sort`
// const sort_lists = (key, list, select) =>
//   (select = "az"
//     ? [...list].sort((b, a) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))
//     : [...list].sort((a, b) =>
//         a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
//       ));

const EpisodesMaSort = ({ episodes }) => {
  const [sortEpis, setSortEpis] = useState(null);
  console.log(episodes);

  episodes.sort((a, b) => (a[sortEpis] < b[sortEpis] ? -1 : 1));

  return (
    <>
      <button
        className="btn btn-warning"
        type="button"
        onClick={() => setSortEpis("name")}
      >
        Sort AZ
      </button>

      <EpisodesMaEp episodes={episodes} />
    </>
  );
};

export { EpisodesMaSort };
