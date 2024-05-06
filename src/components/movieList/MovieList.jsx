import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {movies.map(item => (
          <div key={item.id}>
            <Link to={`/movies/${item.id}`} state={location}>
              <li key={item.id}>{item.title}</li>
            </Link>
          </div>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
