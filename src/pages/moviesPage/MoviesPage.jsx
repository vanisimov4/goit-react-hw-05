import toast, { Toaster } from 'react-hot-toast';
import css from './MoviesPage.module.css';

const MoviesPage = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const textSearch = form.elements.textSearch.value.trim();
    if (textSearch === '') {
      return toast.error('text must be entered to search for movies');
    }
    onSubmit(textSearch);
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input name="textSearch" type="text" autoComplete="off" autoFocus />
        <button type="submit">Search</button>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </>
  );
};

export default MoviesPage;
