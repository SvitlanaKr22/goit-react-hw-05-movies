import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link, List } from './Movieslist.styled';

const MoviesList = ({ arrMovies }) => {
  const location = useLocation(); //объект местоположения, представляющий текущий URL
  return (
    <List>
      {arrMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  arrMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
