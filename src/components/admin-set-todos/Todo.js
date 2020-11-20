import React from "react";
import {connect} from 'react-redux'
import {removeTodo} from '../../redux-store/actions/todoActions'
import {updateTodoState} from '../../redux-store/actions/todoActions'
const Todo = ({ todo , removeTodo, updateTodoState}) => {
  return (
      <div>
        <button onClick={() => updateTodoState(todo.id)} className='edit-btn'>EDIT<i class="fas fa-edit"></i></button>
        <button onClick={() => removeTodo(todo.id)} className='delete-btn'>DELETE<i class="fas fa-trash"></i></button>
      <div className="table-row">
        <div className="id-cont">
          <div className="id-title">ID</div>
          <div className="id-value">{todo.id}</div>
        </div>
        <div className="task-cont">
          <div className="task-title">TASK</div>
          <div className="task-value">{todo.task_name}</div>
        </div>
        <div className="date-cont">
          <div className="date-title">PUBLISHED DATE</div>
          <div className="date-value">
              {todo.publish_date}
          </div>
        </div>
      </div>
      </div>
  );
};

const matchDispatchToProps = dispatch => {
  return {
    removeTodo: (id) => dispatch(removeTodo(id)),
    updateTodoState: (id) => dispatch(updateTodoState(id))
  }
}

export default connect(null, matchDispatchToProps)(Todo);
