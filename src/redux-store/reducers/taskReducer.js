const INITIALSTATE = {
  isEdit: false,
  todos: [],
  todoTobeEdit: "",
};

export const taskReducer = (state = INITIALSTATE, actions) => {
  switch (actions.type) {
    case "GET_TODOS_SUCCESS":
        return {
            ...state,
            todos: actions.payload
        }

    case "POST_TASK_START":
      return state;
    case "POST_TASK_SUCCESS":
      return {
        ...state,
        todos: actions.payload,
      };
    case "DELETE_TASK_START":
      return state;
    case "DELETE_TASK_SUCCESS":
      return {
        ...state,
        todos: actions.payload,
      };
    case "GET_TASK_TO_EDIT_START":
      return state;
    case "GET_TASK_TO_EDIT_SUCCESS":
      return {
        ...state,
        isEdit: actions.edit,
        todoTobeEdit: actions.editToBe,
      };
    case "UPDATE_TASK_START":
      return state;
    case "UPDATE_TASK_SUCCESS":
      return {
          ...state, 
          todos: actions.payload,
          isEdit: false,
          todoTobeEdit: ''
      }
    default:
      return state;
  }
};
