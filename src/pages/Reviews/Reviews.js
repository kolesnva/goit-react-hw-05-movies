import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesAPI';
import { ReviewsList, ReviewsItem } from './ReviewsStyled';

function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(response =>
      setMovieReviews(response?.results ?? [])
    );
  }, [movieId]);

  return (
    <>
      <div>
        {movieReviews.length > 0 && (
          <ReviewsList>
            {movieReviews.map(({ id, content, author }) => (
              <ReviewsItem key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </ReviewsItem>
            ))}
          </ReviewsList>
        )}

        {movieReviews.length === 0 ?? (
          <p>There are no reviews for this movie yet.</p>
        )}
      </div>
    </>
  );
}

export default Reviews;
