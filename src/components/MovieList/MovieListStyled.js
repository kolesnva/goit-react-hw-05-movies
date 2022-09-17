import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${p => p.theme.space[1]}px;
`;
export const Item = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  :hover {
    color: ${p => p.theme.colors.primary};
  }
`;
export const Poster = styled.img`
  display: block;
`;
export const MovieTitle = styled.h2`
  text-decoration: none;
`;
