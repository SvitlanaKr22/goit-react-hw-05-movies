import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/fetchDateAboutMovies';
import MoviesList from 'components/MoviesList/Movieslist';

const Home = () => {
  const [titlesMovie, setTitlesMovie] = useState([]);

  useEffect(() => {
    fetchTrending('movie', 'day')
      .then(data => {
        setTitlesMovie([
          ...data.results.map(({ id, title }) => ({
            id,
            title,
          })),
        ]);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList arrMovies={titlesMovie} />
    </main>
  );
};

export default Home;

//https://api.themoviedb.org/3/movie/550?api_key=55908c20a8c5b517b5247533a2b5c98b
