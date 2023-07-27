// import React from 'react';
// import { Title, SecondTitle, Text, LinkText } from 'components/App.styled';
// import { StyledTextField } from '../AuthRoot.styled';
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

import {useState} from 'react'
import { useAuth } from '../auth';
import {useNavigate} from 'react-router-dom'
import React from 'react'
import { Button } from 'components/Button/Button';


const Login = () => {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    auth.login({ user, email, password })

    navigate('/profile')
  };

  return (
    <div>
      <label>Username: {' '}
      <input type='text' onChange={(e) => setUser(e.target.value)}></input>
      </label>
      <label>Email: {' '}
      <input type='text' onChange={(e) => setEmail(e.target.value)}></input>
      </label>
      <label>Password: {' '}
      <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
      </label>
      <Button type="submit" onClick={handleLogin}>
        LogIn
      </Button>
    </div>
  )
}

export default Login

