import {  Title } from 'components/App.styled'
import React from 'react'
import { useLocation } from 'react-router-dom';
import Card from 'components/Card/Card';
import { SectionCard } from 'components/Card/Card.styled';


const Contacts = () => {
  const location = useLocation();
  return (
    <SectionCard>
      <Title>
      Cards
      {location.state && location.state.fromAbout && ' '}
      </Title>
    <Card/>
    </SectionCard>
  )
}

export default Contacts
