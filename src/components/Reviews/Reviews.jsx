import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/fetchDateAboutMovies';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId)
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
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author:{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have anyreviews for this movie</p>
      )}
    </>
  );
};
export default Reviews;
