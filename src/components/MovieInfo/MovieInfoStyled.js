import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  padding: ${p => p.theme.space[4]}px;
`;
export const Poster = styled.img``;
export const MovieTitle = styled.h2`
  color: white;
`;
export const CreditsList = styled.ul`
  list-style: none;
`;
export const CreditsItem = styled.li`
  color: white;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const MovieNavigationWrap = styled.ul``;
export const NavItem = styled(NavLink)``;
export const BackBtn = styled.button``;
