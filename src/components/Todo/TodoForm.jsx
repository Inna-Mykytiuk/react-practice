import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import { Title } from 'components/App.styled'
import { Button } from 'components/Button/Button';
import { Form, Field, Textarea, Select, Label } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from 'redux/actions/actions';

const TodoForm = ({ todoId, setTodoId }) => {
  const [inputData, setInputData] = useState({
    title: '',
    category: '',
    content: '',
    dueDate: ''
  });

  const dispatch = useDispatch();


  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputData({
      ...inputData, [name]: value
    });

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    //Заборона додавати пустий таск
    if(inputData.title && inputData.content && inputData.dueDate && inputData.category !== '') {
      if (todoId === null) {
        dispatch(addTodo(inputData));
      } else {
        dispatch(updateTodo(todoId, inputData)); // Використовуємо todoId для оновлення таску
      }
      clear();
    navigate('/todo/table');
    }
  };

  const clear = () => {
    setTodoId(null);
    setInputData({
      title: '',
      category: '',
      content: '',
      dueDate: ''
    });
  };

  return (
    <>
      <Form onChange={handleChange}>
      <Title>{todoId ? 'Update Form' : 'Todo Form'}</Title>
        <Field type='text' placeholder='Title' name='title' value={inputData.title} onChange={handleChange}/>
        <>
          <Label htmlFor="category">Category</Label>
          <Select name='category' id="category" onChange={handleChange} value={inputData.category}>
            <option value='Task'>Task</option>
            <option value='Random thoughts'>Random thoughts</option>
            <option value='Quote'>Quote</option>
            <option value='Idea'>Idea</option>
          </Select>
        </>
        <Textarea type='text' placeholder='Content' name='content' onChange={handleChange} value={inputData.content}/>
        <Field type='date' placeholder='Date' name='dueDate'  onChange={handleChange} value={inputData.dueDate}/>
        <Button onClick={handleSubmit}>{todoId ? 'Update Todo' : 'Add Todo'}</Button>
      </Form>
    </>
  )
}

export default TodoForm
