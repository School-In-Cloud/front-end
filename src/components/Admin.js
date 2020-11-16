import React, {useState} from 'react'
import TodoForm from './admin-set-todos/TodoForm'
import TodoList from './admin-set-todos/TodoList'

//needs to be able to create to-do lists for people
const Admin = () => {
    const [todos, setTodos] = useState([])
    console.log(todos)
    const addTodo = todo => setTodos([todo, ...todos])

    return (
        <div>

            Admin
             <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />

        </div>
    )
}

export default Admin
