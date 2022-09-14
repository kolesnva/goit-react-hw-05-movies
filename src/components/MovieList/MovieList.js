import PropTypes from 'prop-types';
import { List, Item, Poster, MovieTitle } from './MovieListStyled';
import { useLocation } from 'react-router-dom';

function MovieList({ items }) {
  const location = useLocation();

  return (
    <List>
      {items.map(({ id, title, poster_path }) => {
        return (
          <Item key={id} to={`/movies/${id}`} state={{ from: location }}>
            <Poster
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
            />
            <MovieTitle>{title}</MovieTitle>
          </Item>
        );
      })}
    </List>
  );
}

MovieList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
