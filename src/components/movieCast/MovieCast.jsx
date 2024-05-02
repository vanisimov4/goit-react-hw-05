import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCreditsById } from '../../tmdb-api';

const MovieCast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchCreditsById(movieId);
        setCast(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      Cast
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
              width="10%"
              height="10%"
            />
            <p>{item.name}</p>
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieCast;
