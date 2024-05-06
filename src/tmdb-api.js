import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendMovies() {
  const url = 'trending/movie/day?language=en-US';

  const options = {
    headers: {
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
  const url = `search/movie?query=${query}&include_adult=true&language=en-US&page=1`;

  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjVmODljNGY3NDNlNzk1ZGRjNTA4MDcwOWE4MTM1MyIsInN1YiI6IjY2MmFiNWY5Y2FhNTA4MDExZjFmZDY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.srHgBAS3neJgJA4CdS77idqDffTlwx1H7umAWFf5nMg',
    },
  };

  const response = await axios.get(url, options);
  return response.data.results;
}

export async function fetchMoviesById(Id) {
  const url = `movie/${Id}?language=en-US`;

  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjVmODljNGY3NDNlNzk1ZGRjNTA4MDcwOWE4MTM1MyIsInN1YiI6IjY2MmFiNWY5Y2FhNTA4MDExZjFmZDY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.srHgBAS3neJgJA4CdS77idqDffTlwx1H7umAWFf5nMg',
    },
  };
  const response = await axios.get(url, options);
  return response.data;
}

export async function fetchCreditsById(Id) {
  const url = `movie/${Id}/credits?language=en-US`;

  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjVmODljNGY3NDNlNzk1ZGRjNTA4MDcwOWE4MTM1MyIsInN1YiI6IjY2MmFiNWY5Y2FhNTA4MDExZjFmZDY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.srHgBAS3neJgJA4CdS77idqDffTlwx1H7umAWFf5nMg',
    },
  };
  const response = await axios.get(url, options);
  return response.data.cast;
}

export async function fetchReviewsById(Id) {
  const url = `movie/${Id}/reviews?language=en-US`;

  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjVmODljNGY3NDNlNzk1ZGRjNTA4MDcwOWE4MTM1MyIsInN1YiI6IjY2MmFiNWY5Y2FhNTA4MDExZjFmZDY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.srHgBAS3neJgJA4CdS77idqDffTlwx1H7umAWFf5nMg',
    },
  };
  const response = await axios.get(url, options);
  return response.data.results;
}
