import React from "react";

const Todo = ({ todo }) => {
  return (
      <div>
        <button className='edit-btn'>EDIT<i class="fas fa-edit"></i></button>
        <button className='delete-btn'>DELETE<i class="fas fa-trash"></i></button>
      <div className="table-row">
        <div className="id-cont">
          <div className="id-title">ID</div>
          <div className="id-value">{todo.id}</div>
        </div>
        <div className="task-cont">
          <div className="task-title">TASK</div>
          <div className="task-value">{todo.todo}</div>
        </div>
        <div className="date-cont">
          <div className="date-title">PUBLISHED DATE</div>
          <div className="date-value">
              {todo.publishedDate}
          </div>
        </div>
      </div>
      </div>
  );
};

export default Todo;
