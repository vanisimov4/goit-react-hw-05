import axios from 'axios';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import HomePage from '../../pages/homePage/HomePage';
import MoviesPage from '../../pages/moviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/movieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../../pages/notFoundPage/NotFoundPage';

import css from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const url =
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

    const options = {
      headers: {
        // Замість api_read_access_token вставте свій токен
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjVmODljNGY3NDNlNzk1ZGRjNTA4MDcwOWE4MTM1MyIsInN1YiI6IjY2MmFiNWY5Y2FhNTA4MDExZjFmZDY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.srHgBAS3neJgJA4CdS77idqDffTlwx1H7umAWFf5nMg',
      },
    };

    axios
      .get(url, options)
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        {/* <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React is amazing</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
}
