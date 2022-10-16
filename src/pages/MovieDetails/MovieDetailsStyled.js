import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const MovieNavigationWrap = styled.ul`
  list-style: none;
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  justify-content: center;
`;
export const NavItem = styled(NavLink)`
  margin-top: ${p => p.theme.space[3]}px;
  display: inline-block;
  text-decoration: none;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.l};
  &:hover,
  :focus {
    color: ${p => p.theme.colors.primary};
  }
  &.active {
    color: ${p => p.theme.colors.primary};
  }
`;
export const BackBtn = styled(Link)`
  margin-top: ${p => p.theme.space[3]}px;
  display: inline-block;
  text-decoration: none;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.white};
  border: none;
  background-color: transparent;
  border-radius: ${p => p.theme.radii.sm};
  &:hover,
  :focus {
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.primary};
    border-radius: ${p => p.theme.radii.sm};
  }
`;
