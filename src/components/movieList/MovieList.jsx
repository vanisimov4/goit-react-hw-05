const MovieList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
