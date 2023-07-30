import React from 'react'
import { Title } from 'components/App.styled'
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from '@mui/material'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'


const TodoTable = () => {
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
          <TableCell>Title</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Content</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TodoTable
