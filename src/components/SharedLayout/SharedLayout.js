import { Outlet } from 'react-router-dom';
import { Header, NavItem } from './SharedLayoutStyled';

function SharedLayout() {
  return (
    <>
      <Header>
        <nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="movies">Movies</NavItem>
        </nav>
      </Header>
      <Outlet />
    </>
  );
}

export default SharedLayout;
