import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { getTrendingMovies } from 'services/moviesAPI';
import { Box } from 'components/Box';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(response => setMovies(response?.results ?? []));
  }, []);

  return (
    <Box as={'section'} p={3}>
      <Box as={'h1'} textAlign="center">
        Popular now
      </Box>
      <MovieList items={movies} />
    </Box>
  );
}

export default Home;
