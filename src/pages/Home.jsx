import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/fetchDateAboutMovies';
import MoviesList from 'components/MoviesList/Movieslist';
import ErrorMessage from 'components/ErrorMessage';

const Home = () => {
  const [titlesMovie, setTitlesMovie] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchTrending('movie', 'day', controller)
      .then(data => {
        setTitlesMovie([
          ...data.results.map(({ id, title }) => ({
            id,
            title,
          })),
        ]);
      })
      .catch(error => setError(error.message));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main>
      <h1 style={{ fontSize: '1.8 em', opacity: '0.8', marginLeft: '10px' }}>
        Trending today
      </h1>
      {!error ? (
        <MoviesList arrMovies={titlesMovie} />
      ) : (
        <ErrorMessage>{error}</ErrorMessage>
      )}
    </main>
  );
};

export default Home;

//https://api.themoviedb.org/3/movie/550?api_key=55908c20a8c5b517b5247533a2b5c98b
