import React, {useState, useEffect} from 'react'
import Task from './Task'
import { axiosWithAuth } from '../../axios/axios.utills'

const TaskList = () => {
    const [taskList, setTaskList] = useState([])
    useEffect(() => {
        axiosWithAuth()
        .get('/api/tasks')
        .then(res => {
            setTaskList(res.data)
        })
        .catch(err => console.log(err))
    })
    return (
        <div className='container'>
            {taskList.map(todo => <Task key={todo.id} todo={todo}/>)}
        </div>
    )
}



export default TaskList
