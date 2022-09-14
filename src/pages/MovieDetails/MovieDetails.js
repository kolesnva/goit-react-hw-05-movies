import { MovieNavigationWrap, NavItem, BackBtn } from './MovieDetailsStyled';
import { Outlet } from 'react-router-dom';
import MovieInfo from 'components/MovieInfo/MovieInfo';

function MovieDetails() {
  return (
    <>
      <div>
        <BackBtn type="button">Back</BackBtn>
        <MovieInfo />
        <MovieNavigationWrap>
          <NavItem to="cast">Cast</NavItem>
          <NavItem to="reviews">Reviews</NavItem>
        </MovieNavigationWrap>
        <Outlet />
      </div>
    </>
  );
}

export default MovieDetails;
