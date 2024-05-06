import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviewsById } from '../../tmdb-api';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    async function fetchData() {
      try {
        const result = await fetchReviewsById(movieId);
        setReviews(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p>We do not have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <h3>Author: {item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;
