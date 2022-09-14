import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieCast } from 'services/moviesAPI';
import { CastList, CastItem } from './CastStyled';

function Cast() {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useSearchParams();

  useEffect(() => {
    getMovieCast(movieId).then(response => setMovieCast(response?.cast));
  }, [movieId]);

  return (
    <>
      {movieCast && (
        <CastList>
          {movieCast.map(({ id, name, profile_path }) => (
            <CastItem key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
            </CastItem>
          ))}
        </CastList>
      )}
    </>
  );
}

export default Cast;
