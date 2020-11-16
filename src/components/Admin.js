import React, {useState} from 'react'
import TodoForm from './admin-set-todos/TodoForm'
import TodoList from './admin-set-todos/TodoList'

const Admin = () => {
    const [todos, setTodos] = useState([])
    console.log(todos)
    const addTodo = todo => setTodos([todo, ...todos])

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    )
}

export default Admin
