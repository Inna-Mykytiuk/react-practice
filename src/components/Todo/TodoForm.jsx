import React from 'react'
import { Title } from 'components/App.styled'
import { Button } from 'components/Button/Button';
import { Form, Field, Textarea, Select, Label } from './Todo.styled';

const TodoForm = () => {
  return (
    <>
      <Form onChange={''}>
        <Title>Todo</Title>
        <Field type='text' placeholder='Title' name='title'/>
        <>
          <Label htmlFor="category">Category</Label>
          <Select name='category' id="category">
            <option value='Task'>Task</option>
            <option value='Random thoughts'>Random thoughts</option>
            <option value='Quote'>Quote</option>
            <option value='Idea'>Idea</option>
          </Select>
        </>
        <Textarea type='text' placeholder='Content' name='content'/>
        <Field type='date' placeholder='Date' name='dueDate' value="2023-07-22"/>
        <Button>Add Todo</Button>
      </Form>
    </>
  )
}

export default TodoForm
