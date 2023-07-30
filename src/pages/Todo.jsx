import React from 'react';
// import TodoForm from 'components/Todo/TodoForm';
import TodoTable from 'components/Todo/TodoTable';
import { Container } from 'components/App.styled';
import { SectionCard } from 'components/Card/Card.styled';


const Todo = () => {
  return (
    <SectionCard>
      <Container>
      {/* <TodoForm /> */}
      <TodoTable />
    </Container>
    </SectionCard>

  )
}

export default Todo
