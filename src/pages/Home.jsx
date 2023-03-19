import { useState, useEffect } from 'react';
import {
  fetchTrending,
  // fetchSearch,
  // fetchDetails,
  // fetchCredits,
  // fetchReviews,
} from 'services/fetchDateAboutMovies';

const Home = () => {
  const [titlesMovie, setTitlesMovie] = useState([]);

  useEffect(() => {
    fetchTrending('movie', 'day')
      .then(data => {
        console.log(data.results);
        setTitlesMovie([
          ...data.results.map(({ id, title }) => ({
            id,
            title,
          })),
        ]);
      })
      .catch(error => console.log(error));

    // fetchSearch('Boston Strangler')
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error));

    // fetchDetails(881164)
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error));

    // fetchCredits(881164)
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error));

    // fetchReviews(842945)
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error));
  }, []);

  console.log(titlesMovie);

  return (
    <main>
      <h1>Welcome</h1>
    </main>
  );
};

export default Home;

//55908c20a8c5b517b5247533a2b5c98b
//https://api.themoviedb.org/3/movie/550?api_key=55908c20a8c5b517b5247533a2b5c98b
