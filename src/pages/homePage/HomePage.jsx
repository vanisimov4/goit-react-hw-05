import { useEffect, useState } from 'react';

import { fetchTrendMovies } from '../../tmdb-api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchTrendMovies();
        console.log(result);
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
      <ul>
        {movies.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
