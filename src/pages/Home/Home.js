import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { getTrendingMovies } from 'services/moviesAPI';
import { SectionWrap, Title } from './HomeStyled';
import { Footer } from 'components/Footer/Footer';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(response => setMovies(response?.results ?? []));
  }, []);

  return (
    <SectionWrap>
      <Title>Popular now</Title>
      <MovieList items={movies} />
      <Footer />
    </SectionWrap>
  );
}

export default Home;
