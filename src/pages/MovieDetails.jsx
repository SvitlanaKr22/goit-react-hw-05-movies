import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import MovieAddInfo from 'components/MovieAddInfo/MovieAddInfo';
import { fetchDetails } from 'services/fetchDateAboutMovies';
import { Link } from 'components/MovieInfo/MovieInfo.styled';
import ErrorMessage from 'components/ErrorMessage';

const MovieDetails = () => {
  //   получить id из строки запросa
  //   сделать запрос
  //   распаковать данные для рендеринга
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [strganres, setStrgantes] = useState('');
  const [releasedate, setReleasedate] = useState('');
  const [poster, setPocter] = useState('');
  const [score, setScore] = useState(0);
  const { movieId } = useParams();
  const location = useLocation(); //объект местоположения, представляющий текущий URL
  const backLinkHref = useRef(location.state?.from ?? '/');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDetails(movieId)
      .then(
        ({
          title,
          overview,
          genres,
          release_date,
          poster_path,
          vote_average,
        }) => {
          setTitle(title);
          setOverview(overview);
          setStrgantes(genres.map(genre => genre.name).join(' | '));
          setReleasedate(release_date.slice(0, 4));
          setPocter('https://image.tmdb.org/t/p/w400/' + poster_path);
          setScore(vote_average);
        }
      )
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <main>
      <Link to={backLinkHref.current}>Go back</Link>
      {!error ? (
        <>
          <MovieInfo
            title={title}
            overview={overview}
            genres={strganres}
            year={releasedate}
            image={poster}
            score={score}
          />
          <MovieAddInfo />
        </>
      ) : (
        <ErrorMessage>{error}</ErrorMessage>
      )}
    </main>
  );
};

export default MovieDetails;
