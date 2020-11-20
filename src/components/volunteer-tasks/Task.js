import React from "react";

const Task = ({ todo }) => {
  return (
      <div>
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

export default Task;
