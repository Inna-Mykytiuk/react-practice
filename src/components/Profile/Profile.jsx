import React from 'react'
import { useAuth } from 'components/auth/auth'
import { Button } from 'components/Button/Button';
import {useNavigate} from 'react-router-dom'
import { Section,Container, Title } from 'components/App.styled';

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault();
    auth.logout()
    navigate('/')
  };


  return (
    <Section>
    <Container>
    <Title>
      Welcome {auth.user}
    </Title>
    <Button type="submit" onClick={handleLogout}>
      Logout
    </Button>
    </Container>

    </Section>
  )
}

export default Profile
