import Searchform from 'components/Searchform/Searchform';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearch } from 'services/fetchDateAboutMovies';
import MoviesList from 'components/MoviesList/Movieslist';

const Movies = () => {
  const [listFoundMovie, setFoundMovie] = useState([]);
  const [serchParams, setSearchParams] = useSearchParams();

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
      .catch(error => console.error(error));
  }, [namemovie]);

  const handleNameMovie = name => setSearchParams({ query: name });

  return (
    <main>
      <Searchform onSearch={handleNameMovie} />
      {namemovie !== '' && <MoviesList arrMovies={listFoundMovie} />}
    </main>
  );
};

export default Movies;
