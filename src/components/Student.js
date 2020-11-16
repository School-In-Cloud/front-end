import {useState} from 'react'

//needs to be able to search by country and days
const Student = () => {
    const [formData,setFormData] = useState({
        countrySearch:'',
        daySearch:''
    })
    return (
        <div>
            Student
            <form>
                <label>
                    Search by country
                    <input
                    name='countrySearch'
                    type='text'
                    ></input>
                </label>

                <label>
                    Search by day of the week
                    <input
                    name='daySearch'
                    type='text'
                    ></input>
                </label>
            </form>
        </div>
    )
}

export default Student
