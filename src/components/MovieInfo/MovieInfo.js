import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/moviesAPI';
import {
  Poster,
  MovieTitle,
  CreditsList,
  CreditsItem,
} from './MovieInfoStyled';

function MovieInfo() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <div>
          <MovieTitle>{`${movie.title} (${movie.release_date.slice(
            0,
            4
          )})`}</MovieTitle>
          <Poster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <CreditsList>
            <CreditsItem>
              <p>{`User score: ${movie.vote_average}%`}</p>
            </CreditsItem>
            <CreditsItem>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </CreditsItem>
            <CreditsItem>
              <h3>Genre</h3>
              <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            </CreditsItem>
          </CreditsList>
        </div>
      )}
    </>
  );
}

export default MovieInfo;
