import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'services/moviesAPI';
import Searchbar from 'components/Searchbar/Searchbar';
import MovieList from 'components/MovieList/MovieList';

function Movies() {
  const [requestedMovies, setRequestedMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query');

    if (query) {
      getMoviesByName(query).then(response => {
        setRequestedMovies(response?.results ?? []);
        setNoResult(!response?.results?.length);
      });
    }
  }, [searchParams]);

  return (
    <div>
      <Searchbar />
      {requestedMovies.length > 0 && <MovieList items={requestedMovies} />}

      {noResult && <p>There was nothing found. Try to find something else</p>}
    </div>
  );
}

export default Movies;
