import UpdateTodo from './admin-set-todos/UpdateTodo'
import TodoList from "./admin-set-todos/TodoList";
import {connect} from 'react-redux'

const Admin = ({isEdit}) => {

  return (
    <div className='container'>
      <h1>Admin</h1>
      {isEdit ? <UpdateTodo/> : ''}
      <TodoList/>
    </div>
  );
};

const mapStateToProps = state => {
  const {isEdit} = state.todos
  return {
    isEdit
  }
}

export default connect(mapStateToProps, {})(Admin);
