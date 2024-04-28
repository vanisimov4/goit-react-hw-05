import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(item => (
          <div key={item.id}>
            <Link to={`${item.id}`}>
              <li key={item.id}>{item.title}</li>
            </Link>
          </div>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
