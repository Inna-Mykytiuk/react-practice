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

      case 'UPDATE_TODO':
      const index = state.todoList.findIndex(todo => todo.id === action.id);
      if (index !== -1) {
        // Update the existing todo in the list
        const updatedTodoList = [...state.todoList];
        updatedTodoList[index] = {
          ...updatedTodoList[index],
          data: action.data
        };
        return {
          ...state,
          todoList: updatedTodoList
        };
      }
      return state;

      // case 'UPDATE_TODO':
      //   state.todoList.map((elem) => {
      //     // eslint-disable-next-line no-self-assign
      //     return (elem.id === action.id ? (elem.data = action.data) : (elem = elem))
      //   })
      //   return {
      //     ...state,
      //     todoList: [...state.todoList]
      //   }



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
