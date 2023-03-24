import Searchform from 'components/Searchform/Searchform';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearch } from 'services/fetchDateAboutMovies';
import MoviesList from 'components/MoviesList/Movieslist';
import ErrorMessage from 'components/ErrorMessage';

const Movies = () => {
  const [listFoundMovie, setFoundMovie] = useState([]);
  const [serchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const namemovie = useMemo(
    () => serchParams.get('query') ?? '',
    [serchParams]
  );

  useEffect(() => {
    if (namemovie === '') return;

    fetchSearch(namemovie)
      .then(({ results }) => {
        setFoundMovie(
          results.map(({ id, title }) => ({
            id,
            title,
          }))
        );
      })
      .catch(error => setError(error.message));
  }, [namemovie]);

  const handleNameMovie = name => setSearchParams({ query: name });

  return (
    <main>
      <Searchform onSearch={handleNameMovie} />
      {!error && namemovie !== '' ? (
        <MoviesList arrMovies={listFoundMovie} />
      ) : (
        <ErrorMessage>{error}</ErrorMessage>
      )}
    </main>
  );
};

export default Movies;
