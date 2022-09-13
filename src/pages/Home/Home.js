import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { getTrendingMovies } from 'services/moviesAPI';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(response => setMovies(response?.results ?? []));
  }, []);

  return (
    <div>
      <h1>Popular now</h1>
      <MovieList items={movies} />
    </div>
  );
}

export default Home;
