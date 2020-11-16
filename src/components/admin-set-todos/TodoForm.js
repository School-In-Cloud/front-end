import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {

    const [todo, setTodo] = useState({
        task: '',
        completed: false
    })

    const inputChange = e => setTodo({...todo, task: e.target.value})

    const handleSubmit = e => {
        e.preventDefault()
        if(todo.task.trim()) {
            addTodo(todo)
            setTodo({...todo, task: ''})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name='task'
                type='text'
                value={todo.task}
                onChange={inputChange}
            />
            <button type='submit'>Add</button>
        </form>
    )
}

export default TodoForm
