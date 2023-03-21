import { Link } from 'react-router-dom';

const MoviesList = ({ arrMovies }) => {
  return (
    <ul>
      {arrMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
