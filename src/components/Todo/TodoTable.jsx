import { Title } from 'components/App.styled';
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'components/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from 'redux/actions/actions';

const TodoTable = ({ setTodoId }) => {
  const navigate = useNavigate();
  const todoList = useSelector(state => state.allReducers.todoList);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    navigate('/todo/form');
  };

  return (
    <div>
      <Title>Table</Title>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Content</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>
                <BorderColorIcon style={{ marginRight: '10px' }} />
                <DeleteOutlineIcon />
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {todoList.map(elem => {
              return (
                <TableRow key={elem.id}>
                  <TableCell>{elem.data.title}</TableCell>
                  <TableCell>{elem.data.category}</TableCell>
                  <TableCell>{elem.data.content}</TableCell>
                  <TableCell>{elem.data.dueDate}</TableCell>
                  <TableCell>
                    <Link to="/todo/form">
                      <BorderColorIcon
                        style={{ marginRight: '10px' }}
                        onClick={() => setTodoId(elem.id)}
                      />
                    </Link>

                    <DeleteOutlineIcon
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Button onClick={handleSubmit}>
        <AddIcon />
        Add Todo
      </Button>
    </div>
  );
};

export default TodoTable;
