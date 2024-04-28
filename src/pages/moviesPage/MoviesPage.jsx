import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';

import { fetchSearchMovies } from '../../tmdb-api';
import MovieList from '../../components/movieList/MovieList';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchSearchMovies(query);
        setMovies(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const textSearch = form.elements.textSearch.value.trim();
    if (textSearch === '') {
      return toast.error('text must be entered to search for movies');
    }
    console.log(textSearch);
    setQuery(textSearch);
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input name="textSearch" type="text" autoComplete="off" autoFocus />
        <button type="submit">Search</button>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
