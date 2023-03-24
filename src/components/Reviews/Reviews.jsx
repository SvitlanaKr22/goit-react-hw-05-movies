import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/fetchDateAboutMovies';
import { List, Message } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetchReviews(movieId, controller)
      .then(({ results }) => {
        setReviews([
          ...results.map(({ author, content, id }) => ({
            author,
            content,
            id,
          })),
        ]);
      })
      .catch(error => console.error(error));
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <List>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </List>
      ) : (
        <Message>We don't have anyreviews for this movie</Message>
      )}
    </>
  );
};
export default Reviews;
