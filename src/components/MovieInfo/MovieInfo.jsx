import PropTypes from 'prop-types';
import { DivInfo } from './MovieInfo.styled';
const MovieInfo = ({ image, title, score, overview, genres, year }) => {
  return (
    <DivInfo>
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
    </DivInfo>
  );
};
export default MovieInfo;

MovieInfo.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
