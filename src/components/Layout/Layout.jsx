import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LoadingIndicator } from './LoadingDots';
import { StyledHeader, StyledNavLink } from './Layout.styled';
import { Container } from 'components/App.styled';

const Layout = () => {
  return (
    <>
      <StyledHeader>
      <Container>
      <nav>
          <StyledNavLink to="/logIn">Login</StyledNavLink>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/cards">Cards</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
      </nav>
      </Container>
      </StyledHeader>

      <Suspense fallback={<LoadingIndicator />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
