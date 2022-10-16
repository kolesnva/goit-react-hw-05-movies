import { MovieNavigationWrap, NavItem, BackBtn } from './MovieDetailsStyled';
import { useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';
import { Footer } from 'components/Footer/Footer';

const MovieInfo = lazy(() => import('components/MovieInfo/MovieInfo'));

function MovieDetails() {
  const location = useLocation();
  const [buttonPath, setButtonPath] = useState('/');

  useEffect(() => {
    setButtonPath(location.state?.from ?? '/');
  }, [location.state?.from]);

  return (
    <>
      <div>
        <BackBtn to={buttonPath}>Back</BackBtn>
        <MovieInfo />
        <MovieNavigationWrap>
          <NavItem to="cast" state={{ from: buttonPath }}>
            Cast
          </NavItem>
          <NavItem to="reviews" state={{ from: buttonPath }}>
            Reviews
          </NavItem>
        </MovieNavigationWrap>
        <Suspense fallback={<h1>Wait...</h1>}>
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </>
  );
}
export default MovieDetails;
