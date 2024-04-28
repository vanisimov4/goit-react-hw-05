import { useEffect, useState } from 'react';

import { fetchTrendMovies } from '../../tmdb-api';
import MovieList from '../../components/movieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchTrendMovies();
        setMovies(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
