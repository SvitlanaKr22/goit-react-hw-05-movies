import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'services/fetchDateAboutMovies';

const Cast = () => {
  const { movieId } = useParams();

  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchCredits(movieId)
      .then(({ cast }) => {
        setActors([
          ...cast.map(({ id, profile_path, name, character }) => ({
            id,
            profile_path,
            name,
            character,
          })),
        ]);
      })
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <>
      <ul>
        {actors.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt="actor"
            ></img>
            <ul>
              <li>{name}</li>
              <li>Character: {character}</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
