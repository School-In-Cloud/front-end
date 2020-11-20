import React, {useState, useEffect} from 'react'
import VolunteersList from './VolunteersList'
import { axiosWithAuth } from '../axios/axios.utills'

const Student = () => {
    const [volunteerList, setValunteerList] = useState([])
    useEffect(() => {
        axiosWithAuth()
        .get('/api/users/volunteers')
        .then(res => {
            setValunteerList(res.data)
        })
    }, [])
    return (
        <div className='container'>
            <h1 className='header'> Student</h1>
            <div className="volunteer-grid">
             {volunteerList.map(person => <VolunteersList key={person.available} person={person}/>)}
            </div>
        </div>
    )
}

export default Student
