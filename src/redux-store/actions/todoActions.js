import { axiosWithAuth } from "../../axios/axios.utills";

export const getTodos = () => {
  return (dispatch) => {
    dispatch({ type: "GET_TODOS_START" });
    axiosWithAuth()
      .get("/api/tasks")
      .then((res) => {
        dispatch({ type: "GET_TODOS_SUCCESS", payload: res.data });
      });
  };
};

export const addTodo = (newTodo) => {
  return (dispatch) => {
    dispatch({ type: "POST_TASK_START" });
    axiosWithAuth()
      .post("/api/tasks/newtask", {
        task_name: newTodo,
      })
      .then(() => {
        axiosWithAuth()
          .get("/api/tasks")
          .then((res) => {
            dispatch({ type: "POST_TASK_SUCCESS", payload: res.data });
          });
      });
  };
};

export const removeTodo = (id) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_TASK_START" });
    axiosWithAuth()
      .delete(`/api/tasks/${id}`)
      .then(() => {
        axiosWithAuth()
          .get("/api/tasks")
          .then((res) => {
            dispatch({ type: "DELETE_TASK_SUCCESS", payload: res.data });
          });
      });
  };
};

export const updateTodoState = (id) => {
  return (dispatch) => {
    dispatch({ type: "GET_TASK_TO_EDIT_START" });
    axiosWithAuth()
      .get(`/api/tasks/${id}`)
      .then((res) => {
        dispatch({
          type: "GET_TASK_TO_EDIT_SUCCESS",
          edit: true,
          editToBe: res.data,
        });
      });
  };
};

export const updateTodo = (task) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_TASK_START" });
    axiosWithAuth()
      .put(`/api/tasks/${task.id}`, task)
      .then(() => {
        axiosWithAuth()
          .get("/api/tasks")
          .then((res) => {
            dispatch({ type: "UPDATE_TASK_SUCCESS", payload: res.data });
          });
      });
  };
};
