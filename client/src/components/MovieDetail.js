const MovieDetail = ({ movie }) => {
  return (
    <div className="container-fluid movie-detail p-0">
      <div className="row card-detail m-0">
        <div className="col-5 p-0">
        <img
              src={movie.cover_url}
              className="card-img-top large-image"
              alt={movie.title}
            ></img>
        </div>
        <div className="col-7 p-4 light-text">
          <h3>{movie.title}</h3>
          <p className="detail-text">{movie.overview}</p>
          <p className="detail-text">Release: {movie.release_date}</p>
          <p className="detail-text">{movie.duration} min.</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
