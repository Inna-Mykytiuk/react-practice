// import React from 'react';
import { Title, SecondTitle, Text, LinkText } from 'components/App.styled';
import {  Form } from '../AuthRoot.styled';
// import { Button } from 'components/Button/Button';

// const LogIn = ({ setEmail, setPassword }) => {
//   return (
//     <>
//       <Title>Authorization</Title>
//       <SecondTitle>Enter your login and password</SecondTitle>
//       <StyledTextField
//         fullWidth={true}
//         margin="normal"
//         label="Email"
//         variant="outlined"
//         placeholder="Enter your email"
//         onChange={e => setEmail(e.target.value)}
//         autoComplete="username"
//       />
//       <StyledTextField
//         type="password"
//         fullWidth={true}
//         margin="normal"
//         label="Password"
//         variant="outlined"
//         placeholder="Enter your password"
//         onChange={e => setPassword(e.target.value)}
//         autoComplete="current-password"
//       />
//       <Button type="submit" onClick={() => ''}>
//         LogIn
//       </Button>
//       <Text>
//         Don't have an account? <LinkText>Registration</LinkText>
//       </Text>
//     </>
//   );
// };

// export default LogIn;

import {useState, useEffect} from 'react'
import { useAuth } from '../auth';
import {useNavigate, useLocation} from 'react-router-dom'
import React from 'react'
import { Button } from 'components/Button/Button';
import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Section, Container } from 'components/App.styled';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#FFB3CB',
    },
  },
});


const Login = () => {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation();

  const redirectPath = location.state?.path || '/profile'

  useEffect(() => {
    // Reset the input fields when the component mounts
    setUser('');
    setEmail('');
    setPassword('');
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    auth.login({ user, email, password })

    // navigate('/profile')
    navigate(redirectPath, {replace: true})
  };

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
        autoComplete="off"
        // autoComplete="given-name"
        name="name"
        autoFocus
        sx={{ boxShadow: 3 }}
        onChange={(e) => setUser(e.target.value)}
        type='text'
        placeholder='Enter your name'
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
        // autoComplete="given-name"
        name="email"
        autoFocus
        margin="normal"
        sx={{ boxShadow: 3 }}
        onChange={(e) => setEmail(e.target.value)}
        type='text'
        placeholder='Enter your email'
        value={email}
      />
      <TextField
        required
        fullWidth
        id="password"
        label="Password"
        autoComplete="new-password"
        // autoComplete="given-name"
        name="password"
        autoFocus
        sx={{ boxShadow: 3 }}
        onChange={(e) => setPassword(e.target.value)}
        type='password'
        placeholder='Enter your password'
        value={password}
        margin="normal"
      />
      {/* <StyledTextField
        type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Enter your password"
        onChange={e => setPassword(e.target.value)}
        autoComplete="new-password"
      /> */}
      <Button type="submit" onClick={handleLogin}>
        LogIn
      </Button>
      <Text>
      Don't have an account? <LinkText>Registration</LinkText>
      </Text>
    </Form>


      </Container>

    </Section>

    </ThemeProvider>
  )
}

export default Login

