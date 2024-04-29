import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from '../../tmdb-api';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  // console.log(movie);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchMoviesById(movieId);
        setMovie(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      <h2>
        movie - {movie} - {movieId}
      </h2>
    </>
  );
};

export default MovieDetailsPage;
