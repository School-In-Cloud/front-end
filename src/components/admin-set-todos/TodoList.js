import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {

    return (
        <ul>
            {todos.map((elem, idx) => <Todo key={idx}  todo={elem} />)}
        </ul>
    )
}

export default TodoList
