import Film2 from "../assets/Film2.svg";
import Bookmark2 from "../assets/Bookmark1.svg";
import { useEffect } from "react";

function CArd() {
  //   useEffect(() => {
  //     fetch(`${import.meta.env.VITE_MOVIE_API}v1.4/movie?type=movie`)
  //       .then((data) => data.json)
  //       .then((data) => console.log(data))
  //       .catch((err) => console.log(err));
  //   }, []);
  return (
    <div className="card-wrapper mb-4 mr-2">
      <div className="img">
        <img className="thumb" src={Film2} alt="" />
        <div className="book">
          <img src={Bookmark2} alt="" />
        </div>
      </div>
      <p className="movie-info">
        <span>2019</span>
        <span>&#x2022;</span>
        <span>
          <span>Movie</span>
        </span>
        <span>&#x2022;</span>
        <span>PG</span>
      </p>
      <h3 className="movie-name">The great lends</h3>
    </div>
  );
}

export default CArd;
