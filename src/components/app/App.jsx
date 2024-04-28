// import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import clsx from 'clsx';
import { fetchTrendMovies } from '../../tmdb-api';
import Navigation from '../navigation/Navigation';
import HomePage from '../../pages/homePage/HomePage';
import MoviesPage from '../../pages/moviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/movieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../../pages/notFoundPage/NotFoundPage';
import MovieCast from '../movieCast/MovieCast';
import MovieReviews from '../movieReviews/MovieReviews';

import css from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetchTrendMovies();
  // }, []);

  return (
    <>
      <Navigation />
      <hr></hr>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
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
