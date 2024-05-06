import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCreditsById } from '../../tmdb-api';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  useEffect(() => {
    if (!movieId) return;
    async function fetchData() {
      try {
        const result = await fetchCreditsById(movieId);
        setCast(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);
  return (
    <>
      Cast
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                  : defaultImg
              }
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
