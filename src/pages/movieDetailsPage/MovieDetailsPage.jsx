import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

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
        setMovieGenre(genres.join(', '));
        const dateObject = new Date(movie.release_date);
        setMovieYear(dateObject.getFullYear());
        // console.log(dateObject.getFullYear());
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId, movieYear]);

  return (
    <>
      <button>Go back</button>
      <div className={css.wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width="25%"
          height="25%"
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
      <hr></hr>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr></hr>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
