import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Navigation from '../navigation/Navigation';
import NotFoundPage from '../../pages/notFoundPage/NotFoundPage';

const HomePage = lazy(() => import('../../pages/homePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/moviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/movieDetailsPage/MovieDetailsPage')
);
const MovieCast = lazy(() => import('../movieCast/MovieCast'));
const MovieReviews = lazy(() => import('../movieReviews/MovieReviews'));

function App() {
  return (
    <>
      <Navigation />
      <hr></hr>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
