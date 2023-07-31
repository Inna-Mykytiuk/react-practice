const initialInput = {
  todoList: [],
}

const allReducers = (state = initialInput, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const {data, id} = action.payload;

      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id,
            data
          }
        ]
      }
      case 'DELETE_TODO':
        const newTodoList = state.todoList.filter((elem) => elem.id !== action.id)
        return {
          ...state,
          todoList: newTodoList
        }




      default:
        return state;
  }
}

export default allReducers
