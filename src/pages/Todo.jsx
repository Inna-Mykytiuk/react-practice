import { Container } from 'components/App.styled';
import { SectionCard } from 'components/Card/Card.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LoadingIndicator } from '../components/Layout/LoadingDots';



const Todo = ({ todoId, setTodoId }) => {


  return (
    <SectionCard>
      <Container>
        <Suspense fallback={<LoadingIndicator />}>
        <Outlet setTodoId={setTodoId} todoId={todoId}/>
      </Suspense>
    </Container>
    </SectionCard>

  )
}

export default Todo
