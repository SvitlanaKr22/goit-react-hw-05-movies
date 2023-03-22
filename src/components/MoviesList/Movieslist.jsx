import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ arrMovies }) => {
  const location = useLocation();
  return (
    <ul>
      {arrMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
