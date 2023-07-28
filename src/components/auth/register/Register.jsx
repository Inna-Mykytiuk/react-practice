// import React from 'react';

// import { Title, SecondTitle, Text, LinkText } from 'components/App.styled';
// import { StyledTextField } from '../AuthRoot.styled';
// import { Button } from 'components/Button/Button';

// const defaultTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#FFB3CB',
//     },
//   },
// });

// const Register = () => {
//   return (
//     <>
//       <Title>Registration</Title>
//       <SecondTitle>Enter registration information</SecondTitle>
//       <StyledTextField
//         fullWidth={true}
//         margin="normal"
//         label="Name"
//         variant="outlined"
//         placeholder="Enter your name"
//         autoComplete="name"
//       />
//       <StyledTextField
//         fullWidth={true}
//         margin="normal"
//         label="Username"
//         variant="outlined"
//         placeholder="Enter your Username"
//         autoComplete="username"
//       />
//       <StyledTextField
//         fullWidth={true}
//         margin="normal"
//         label="Email"
//         variant="outlined"
//         placeholder="Enter your email"
//         autoComplete="email"
//       />
//       <StyledTextField
//         fullWidth={true}
//         type="password"
//         margin="normal"
//         label="Password"
//         variant="outlined"
//         placeholder="Enter your password"
//         autoComplete="password"
//       />
//       <StyledTextField
//         fullWidth={true}
//         type="password"
//         margin="normal"
//         label="Password"
//         variant="outlined"
//         placeholder="Repeat your password"
//         autoComplete="password"
//       />
//       <Button onClick={() => ''}>Registration</Button>
//       <Text>
//         Do you have an account? <LinkText>LogIn</LinkText>
//       </Text>
//     </>
//   );
// };

// export default Register;

import {
  Title,
  SecondTitle,
  Text,
  LinkText,
  Section,
  Container,
} from 'components/App.styled';
import { Form } from '../AuthRoot.styled';
import { useState } from 'react';
import { useAuth } from '../auth';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import React from 'react';
import { Button } from 'components/Button/Button';
import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Box } from '@mui/material';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#FFB3CB',
    },
  },
});

const Register = () => {
  const [user, setUser] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || '/profile';

  const onSignUp = location.pathname === '/register';

  const handleLogin = async e => {
    e.preventDefault();
    auth.login({ user, email, password, userName });

    // navigate('/profile')
    navigate(redirectPath, { replace: true });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Section>
        <Container>
          <Title>Registration</Title>
          <SecondTitle>Enter registration information</SecondTitle>
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
              id="username"
              label="Username"
              autoComplete="given-name"
              name="username"
              autoFocus
              sx={{ boxShadow: 3 }}
              onChange={e => setUserName(e.target.value)}
              type="text"
              placeholder="Enter your username"
              value={user}
              margin="normal"
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
            {onSignUp && (
              <Text>
                `Do you have an account?`
                <Link to={`/login`} variant="body2" color="primary">
                  <LinkText> Login</LinkText>
                </Link>
              </Text>
            )}
          </Form>
        </Container>
      </Section>
    </ThemeProvider>
  );
};

export default Register;
