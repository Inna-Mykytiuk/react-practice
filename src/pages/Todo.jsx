import React from 'react';
import { Container } from 'components/App.styled';
import { SectionCard } from 'components/Card/Card.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LoadingIndicator } from '../components/Layout/LoadingDots';


const Todo = () => {
  return (
    <SectionCard>
      <Container>
        <Suspense fallback={<LoadingIndicator />}>
        <Outlet />
      </Suspense>
    </Container>
    </SectionCard>

  )
}

export default Todo
