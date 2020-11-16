import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm';
import {connect} from 'react-redux'

const TodoList = ({todos}) => {
    
    return (
        <div className='container'>
            <TodoForm/>
            {todos.todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    )
}

const mapStateToProps = state => {
    const {todos} = state
    return {
        todos
    }
}

export default connect(mapStateToProps, {})(TodoList)
