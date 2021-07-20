
import { useContext } from "react";
import MovieDetail from "./MovieDetail";
import MainContext from "../context/context";

const Card = ({ movie }) => {

  const { setMainTitle } = useContext(MainContext);

  return (
    <div className="row">
      <div className="col-4 p-0 card-style d-flex justify-content-center">
        <div className="img-container d-flex justify-content-center mt-3">
          <a
            className="navbar-brand m-0"
            data-bs-toggle="collapse"
            href={"#collapseExample" + movie.id}
            role="button"
            aria-expanded="false"
            aria-controls={"collapseExample" + movie.id}
            onClick={() => setMainTitle(movie.title)}
          >
            <img
              src={movie.cover_url}
              className="card-img-top small-image"
              alt={movie.title}
            ></img>
          </a>
        </div>
      </div>
      <div className="col-8 d-flex align-items-center">
        <a
          className="navbar-brand m-0"
          data-bs-toggle="collapse"
          href={"#collapseExample" + movie.id}
          role="button"
          aria-expanded="false"
          aria-controls={"collapseExample" + movie.id}
          onClick={() => setMainTitle(movie.title)}
        >
          <p className="main-text light-text">{movie.title}</p>
        </a>
      </div>
      <div className="collapse col-12 p-0" id={"collapseExample" + movie.id}>
        <MovieDetail movie={movie} />
      </div>
    </div>
  );
};

export default Card;
