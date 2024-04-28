import axios from 'axios';

// axios.defaults.baseURL = 'https://api.unsplash.com';

export async function fetchTrendMovies() {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjVmODljNGY3NDNlNzk1ZGRjNTA4MDcwOWE4MTM1MyIsInN1YiI6IjY2MmFiNWY5Y2FhNTA4MDExZjFmZDY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.srHgBAS3neJgJA4CdS77idqDffTlwx1H7umAWFf5nMg',
    },
  };

  const response = await axios.get(url, options);
  // .then(response => console.log(response.data.results))
  // .catch(err => console.error(err));
  return response.data.results;
}

export async function fetchSearchMovies(query) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=en-US&page=1`;

  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjVmODljNGY3NDNlNzk1ZGRjNTA4MDcwOWE4MTM1MyIsInN1YiI6IjY2MmFiNWY5Y2FhNTA4MDExZjFmZDY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.srHgBAS3neJgJA4CdS77idqDffTlwx1H7umAWFf5nMg',
    },
  };

  //   const params = {
  //     query: 'batman',
  //   };

  const response = await axios.get(url, options);
  return response.data.results;
}

export async function fetchMoviesById(Id) {
  const url = `https://api.themoviedb.org/3/movie/${Id}?language=en-US`;

  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjVmODljNGY3NDNlNzk1ZGRjNTA4MDcwOWE4MTM1MyIsInN1YiI6IjY2MmFiNWY5Y2FhNTA4MDExZjFmZDY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.srHgBAS3neJgJA4CdS77idqDffTlwx1H7umAWFf5nMg',
    },
  };
  console.log(response);
  const response = await axios.get(url, options);
  return response.data.results;
}
