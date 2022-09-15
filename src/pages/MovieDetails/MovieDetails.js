import { MovieNavigationWrap, NavItem, BackBtn } from './MovieDetailsStyled';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const Cast = lazy(() => import('../../pages/Cast/Cast'));
const Reviews = lazy(() => import('../../pages/Reviews/Reviews'));

function MovieDetails() {
  const [buttonPath, setButtonPath] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location?.state?.from) {
      setButtonPath(location.state.from);
    }
  }, [location.state.from]);

  return (
    <>
      <div>
        <BackBtn
          type="button"
          onClick={() => {
            navigate(buttonPath || '/');
          }}
        >
          Back
        </BackBtn>
        <MovieInfo />
        <MovieNavigationWrap>
          <NavItem to="cast">Cast</NavItem>
          <NavItem to="reviews">Reviews</NavItem>
        </MovieNavigationWrap>
        <Suspense fallback={<h1>Wait...</h1>}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default MovieDetails;
