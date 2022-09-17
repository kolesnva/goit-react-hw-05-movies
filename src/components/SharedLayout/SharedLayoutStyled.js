import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.white};
`;
export const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: ${p => p.theme.space[3]}px;
  text-align: center;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};

  :hover {
    color: ${p => p.theme.colors.primary};
  }
`;
