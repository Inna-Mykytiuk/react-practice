import React from 'react';

import { Title, SecondTitle, Text, LinkText } from 'components/App.styled';
import { StyledTextField } from '../AuthRoot.styled';
import { Button } from 'components/Button/Button';

const Register = () => {
  return (
    <>
      <Title>Registration</Title>
      <SecondTitle>Enter registration information</SecondTitle>
      <StyledTextField
        fullWidth={true}
        margin="normal"
        label="Name"
        variant="outlined"
        placeholder="Enter your name"
        autoComplete="name"
      />
      <StyledTextField
        fullWidth={true}
        margin="normal"
        label="Username"
        variant="outlined"
        placeholder="Enter your Username"
        autoComplete="username"
      />
      <StyledTextField
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Enter your email"
        autoComplete="email"
      />
      <StyledTextField
        fullWidth={true}
        type="password"
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Enter your password"
        autoComplete="password"
      />
      <StyledTextField
        fullWidth={true}
        type="password"
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Repeat your password"
        autoComplete="password"
      />
      <Button onClick={() => ''}>Registration</Button>
      <Text>
        Do you have an account? <LinkText>LogIn</LinkText>
      </Text>
    </>
  );
};

export default Register;
