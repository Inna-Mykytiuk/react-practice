import { Title, SecondTitle, Text, LinkText, Section, Container } from 'components/App.styled';
import { Form } from '../AuthRoot.styled';
import { useState } from 'react';
import { useAuth } from '../auth';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import React from 'react';
import { Button } from 'components/Button/Button';
import { TextField } from '@mui/material';
// import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#FFB3CB',
    },
  },
});

const Login = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || '/profile';

  const onSignIn = location.pathname === '/login';

  const handleLogin = async e => {
    e.preventDefault();
    auth.login({ user, email, password });

    // navigate('/profile')
    navigate(redirectPath, { replace: true });
  };

  if (auth.user) {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Section>
          <Container>
            <Title>Already Logged In</Title>
            <SecondTitle>You are already logged in as {auth.user.name}.</SecondTitle>
            <Link to="/profile" variant="body2" color="primary">
              Go to Profile
            </Link>
          </Container>
        </Section>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Section>
        <Container>
          <Title>Authorization</Title>
          <SecondTitle>Enter your login and password</SecondTitle>
          <Form>
            <TextField
              required
              fullWidth
              id="name"
              label="Name"
              autoComplete="given-name"
              name="name"
              autoFocus
              sx={{ boxShadow: 3 }}
              onChange={e => setUser(e.target.value)}
              type="text"
              placeholder="Enter your name"
              value={user}
              margin="normal"
              // helperText={
              //   'Example of valid email address: qwerty1@example.com'
              // }
            />
            <TextField
              required
              fullWidth
              // id="email"
              label="Email"
              autoComplete="new-email"
              name="email"
              autoFocus
              margin="normal"
              sx={{ boxShadow: 3 }}
              onChange={e => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email"
              value={email}
            />
            <TextField
              required
              fullWidth
              id="password"
              label="Password"
              autoComplete="new-password"
              name="password"
              autoFocus
              sx={{ boxShadow: 3 }}
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              value={password}
              margin="normal"
            />
            <Button type="submit" onClick={handleLogin}>
              LogIn
            </Button>
            {onSignIn && (
              <Text>`Don't have an account?`
              <Link to={`/register`} variant="body2" color="primary">
              <LinkText> Registration</LinkText>
              </Link>
              </Text>
              )}
          </Form>
        </Container>
      </Section>
    </ThemeProvider>
  );
};

export default Login;
