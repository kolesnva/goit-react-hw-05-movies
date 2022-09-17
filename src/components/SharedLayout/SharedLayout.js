import { Outlet } from 'react-router-dom';
import { Header, NavItem } from './SharedLayoutStyled';
import { Suspense } from 'react';

function SharedLayout() {
  return (
    <>
      <Header>
        <nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="movies">Movies</NavItem>
        </nav>
      </Header>
      <Suspense fallback={<h1>Wait...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default SharedLayout;
