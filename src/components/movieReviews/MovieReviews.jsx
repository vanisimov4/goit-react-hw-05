import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviewsById } from '../../tmdb-api';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchReviewsById(movieId);
        setReviews(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return <>Reviews</>;
};

export default MovieReviews;
