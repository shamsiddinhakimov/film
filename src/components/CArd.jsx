import Film2 from "../assets/Film2.svg";
import Bookmark2 from "../assets/Bookmark1.svg";
function CArd() {
  return (
    <div className="home-movie-wrapper">
        <div className="card-wrapper">
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
    </div>
  );
}

export default CArd;
