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
  border-radius: ${p => p.theme.radii.md};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  display: block;
  text-decoration: none;
  color: ${p => p.theme.colors.white};

  :hover {
    color: ${p => p.theme.colors.primary};
    box-shadow: 5px 5px 15px 5px #737372;
  }
`;
export const Poster = styled.img`
  display: block;
  margin: 0 auto;
`;
export const MovieTitle = styled.h2`
  text-decoration: none;
  text-align: center;
`;
