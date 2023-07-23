import { Container, Section, Title } from 'components/App.styled'
import React from 'react'
import { useLocation } from 'react-router-dom';

const Contacts = () => {
  const location = useLocation();
  return (
    <Section>
    <Container>
      <Title>
      Contacts
      {location.state && location.state.fromAbout && ' '}
      </Title>
    </Container>

    </Section>
  )
}

export default Contacts
