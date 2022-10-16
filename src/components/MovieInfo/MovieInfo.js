import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/moviesAPI';
import {
  Poster,
  MovieTitle,
  CreditsList,
  CreditsItem,
  Container,
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
        <Container>
          <div style={{ textAlign: 'center' }}>
            <MovieTitle>{`${movie.title} (${movie.release_date.slice(
              0,
              4
            )})`}</MovieTitle>
            <Poster
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <CreditsList>
            <CreditsItem>
              <h3 style={{ textAlign: 'center' }}>About:</h3>
              <p style={{ textAlign: 'center' }}>{movie.overview}</p>
            </CreditsItem>
            <CreditsItem>
              <h3 style={{ textAlign: 'center' }}>{`User score: ${
                movie.vote_average.toFixed(2) * 10
              }%`}</h3>
            </CreditsItem>
            <CreditsItem>
              <h3 style={{ textAlign: 'center' }}>Genres:</h3>
              <p style={{ textAlign: 'center' }}>
                {movie.genres.map(genre => genre.name).join(', ')}
              </p>
            </CreditsItem>
          </CreditsList>
        </Container>
      )}
    </>
  );
}

export default MovieInfo;
