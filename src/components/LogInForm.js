import {useState} from 'react'
import * as yup from 'yup'
import LoginFormSchema from '../Validation/LoginFormSchema'

const LogInForm = () => {
    const [formData,setFormData] = useState({
        username:'',
        password:'',
   
    });
    const [formErrors,setFormErrors] = useState({
        username:'',
        password:''
    });

    const inputChange = (name,value) => {
        yup
            .reach(LoginFormSchema, name)
            .validate(value)
            .then(()=>{
                setFormErrors({
                    ...formErrors,
                    [name]:'',
                })
            }) 
            .catch((err)=>{
                setFormErrors({
                    ...formErrors,
                    [name]:err.errors[0],
                });
            });
            setFormData({
                ...formData,
                [name]:value
            });
    };
    
    const onChange= (evt) =>{
        const { name, value } = evt.target;
        inputChange(name, value);
    }
    
    return (
        <form>
        <div>
            Login 
         
        </div>
        <label>
            Username
            <input
            name='username'
            type='text'
            onChange={onChange}
            value={formData.email}
            ></input>
        </label>
        
        <label>
            Password
            <input
            name='password'
            type='password'
            onChange={onChange}
            value={formData.password}
            ></input>
        <button>Login</button>
        </label>
    </form>
    )}
    


export default LogInForm
