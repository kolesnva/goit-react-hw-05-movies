import axios from 'axios';

const API_KEY = 'f0766e9050bf27a2816eaba7638d5b74';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getTrendingMovies() {
  try {
    const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMoviesByName(searchQuery) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query: searchQuery,
    page: 1,
  });
  try {
    const { data } = await axios.get(`search/movie?${searchParams}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
