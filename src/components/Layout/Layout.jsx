import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LoadingIndicator } from './LoadingDots';
import { StyledHeader, StyledNavLink } from './Layout.styled';
import { Container } from 'components/App.styled';
import { useAuth } from 'components/auth/auth';

const Layout = () => {
  const auth = useAuth();
  return (
    <>
      <StyledHeader>
        <Container>
          <nav>
            <StyledNavLink to="/">Home</StyledNavLink>

            {!auth.user ? (
              <>
              <StyledNavLink to="/login">Login</StyledNavLink>
              <StyledNavLink to="/register">Register</StyledNavLink>
              </>
            ) : (
              <>
                <StyledNavLink to="/cards">Cards</StyledNavLink>
                <StyledNavLink to="/about">About</StyledNavLink>
                <StyledNavLink to="/profile">Profile</StyledNavLink>
              </>
            )}
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
