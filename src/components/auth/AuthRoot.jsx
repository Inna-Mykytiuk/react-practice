import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LogIn from './login/LogIn';
import Register from './register/Register';
import { Root, Form } from './AuthRoot.styled';
import { Box } from '@mui/material';
// import axios from 'axios';

const AuthRoot = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password)
    // const userData = {
    //   email,
    //   password,
    // }
    // const user = await axios.post('https://localhost:5000/auth/login', userData);
    // console.log(user.data)
  };

  return (
    <Root>
      <Form onSubmit={handleSubmit}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px rgba(0, 0, 0, 0.3)'}
        >
          {location.pathname === '/login' ? (
            <LogIn setEmail={setEmail} setPassword={setPassword}/>
          ) : location.pathname === '/register' ? (
            <Register setEmail={setEmail} setPassword={setPassword} />
          ) : null}
        </Box>
      </Form>
    </Root>
  );
};

export default AuthRoot;
