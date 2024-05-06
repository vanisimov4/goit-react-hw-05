import { useEffect, useState, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

import { fetchMoviesById } from '../../tmdb-api';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const [movieGenre, setMovieGenre] = useState();
  const [movieYear, setMovieYear] = useState();
  const [backLinkHref, setBackLinkHref] = useState();

  const { movieId } = useParams();
  const location = useLocation();

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  useEffect(() => {
    setBackLinkHref(location.state ?? '/movies');
  }, []);

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
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId, movieYear]);

  return (
    <>
      <Link to={backLinkHref}>Go back</Link>
      <div className={css.wrapper}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultImg
          }
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
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
