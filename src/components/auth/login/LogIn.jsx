import React from 'react';
import { Title, SecondTitle, Text, LinkText } from 'components/App.styled';
import { StyledTextField } from '../AuthRoot.styled';
import { Button } from 'components/Button/Button';

const LogIn = ({ setEmail, setPassword }) => {
  return (
    <>
      <Title>Authorization</Title>
      <SecondTitle>Enter your login and password</SecondTitle>
      <StyledTextField
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Enter your email"
        onChange={e => setEmail(e.target.value)}
        autoComplete="username"
      />
      <StyledTextField
        type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Enter your password"
        onChange={e => setPassword(e.target.value)}
        autoComplete="current-password"
      />
      <Button type="submit" onClick={() => ''}>
        LogIn
      </Button>
      <Text>
        Don't have an account? <LinkText>Registration</LinkText>
      </Text>
    </>
  );
};

export default LogIn;
