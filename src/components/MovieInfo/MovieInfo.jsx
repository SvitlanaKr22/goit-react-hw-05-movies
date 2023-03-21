const MovieInfo = ({ image, title, score, overview, genres, year }) => {
  return (
    <div>
      <img src={image} alt="movie's poster"></img>
      <div>
        <h2>
          {title} {`(${year})`}
        </h2>
        <p>User score: {score}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
    </div>
  );
};
export default MovieInfo;
