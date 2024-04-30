import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMoviesById } from '../../tmdb-api';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const [movieGenre, setMovieGenre] = useState();
  const [movieYear, setMovieYear] = useState();

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchMoviesById(movieId);
        setMovie(result);

        const genres = result.genres.map(function (item) {
          return item.name;
        });
        console.log(genres);
        setMovieGenre(genres.join(', '));
        const dateString = movie.release_date;
        const dateObject = new Date(dateString);
        const year = dateObject.getFullYear();
        setMovieYear(dateObject.getFullYear());
        console.log(year);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      <div className={css.wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h2>
            {movie.title} ({movieYear})
          </h2>
          <p>User Score: {Math.round(movie.vote_average * 10)} %</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movieGenre}</p>
          <h2>movie - - {movieId}</h2>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
