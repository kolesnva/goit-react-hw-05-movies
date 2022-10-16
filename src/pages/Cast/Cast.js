import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovieCast } from 'services/moviesAPI';
import { CastList, CastItem } from './CastStyled';

function Cast() {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

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
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
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

Cast.propTypes = {
  movieCast: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string.isRequired,
  }),
};

export default Cast;
