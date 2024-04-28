import { useParams } from 'react-router-dom';
import { fetchMoviesById } from '../../tmdb-api';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const movie = fetchMoviesById(id);
  return (
    <>
      <h2>
        movie - {movie} - {id}
      </h2>
    </>
  );
};

export default MovieDetailsPage;
