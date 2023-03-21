import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import MovieAddInfo from 'components/MovieAddInfo/MovieAddInfo';
import { fetchDetails } from 'services/fetchDateAboutMovies';

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
          setStrgantes(genres.map(genre => genre.name).join(' '));
          setReleasedate(release_date.slice(0, 4));
          setPocter('https://image.tmdb.org/t/p/w400/' + poster_path);
          setScore(vote_average);
        }
      )
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <main>
      <Link to="/">Go back</Link>
      <MovieInfo
        title={title}
        overview={overview}
        genres={strganres}
        year={releasedate}
        image={poster}
        score={score}
      />
      <MovieAddInfo />
    </main>
  );
};

export default MovieDetails;
