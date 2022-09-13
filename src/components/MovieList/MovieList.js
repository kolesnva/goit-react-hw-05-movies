import PropTypes from 'prop-types';
import { List, Item, Poster, MovieTitle } from './MovieListStyled';

function MovieList({ items }) {
  return (
    <List>
      {items.map(({ id, title, poster_path }) => (
        <Item key={id} to={`movies/${id}`}>
          <Poster
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
          <MovieTitle>{title}</MovieTitle>
        </Item>
      ))}
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
