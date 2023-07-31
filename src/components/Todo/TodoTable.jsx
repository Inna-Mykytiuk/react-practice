import { Title } from 'components/App.styled'
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody} from '@mui/material'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Button/Button';


const TodoTable = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/todo/form')
  }

  return (
    <div>
      <Title>Table</Title>
      <TableContainer component={Paper}>
        <Table sx={{minWidth:650}}>
          <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Content</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>
              <BorderColorIcon/>
              <DeleteOutlineIcon/>
            </TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
          <TableRow>
          <TableCell>Title</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Content</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>
              <BorderColorIcon/>
              <DeleteOutlineIcon/>
            </TableCell>
          </TableRow>

          </TableBody>
        </Table>
      </TableContainer>

      <Button onClick={handleSubmit}>
      <AddIcon/>
      Add Todo
      </Button>

    </div>
  )
}

export default TodoTable
