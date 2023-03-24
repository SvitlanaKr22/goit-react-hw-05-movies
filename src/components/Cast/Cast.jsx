import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'services/fetchDateAboutMovies';
import { List, Sublist } from './Cast.styled';
import ErrorMessage from 'components/ErrorMessage';

const Cast = () => {
  const { movieId } = useParams();

  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchCredits(movieId, controller)
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
      .catch(error => setError(error.message));
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      {!error ? (
        <List>
          {actors.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt="actor"
              ></img>
              <Sublist>
                <li>{name}</li>
                <li>Character: {character}</li>
              </Sublist>
            </li>
          ))}
        </List>
      ) : (
        <ErrorMessage>{error}</ErrorMessage>
      )}
    </>
  );
};

export default Cast;
