import {useState} from 'react'
import * as yup from 'yup'
import LoginFormSchema from '../Validation/LoginFormSchema'
import { StyledLogin } from '../Styling/StyledComponents'


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
        <StyledLogin>
        <div>
            Login 
         
        </div>
        <label>
           
            <input
            name='username'
            placeholder='Username'
            type='text'
            onChange={onChange}
            value={formData.email}
            ></input>
        </label>
        
        <label>
          
            <input
            name='password'
            placeholder='Password'
            type='password'
            onChange={onChange}
            value={formData.password}
            ></input>
        </label>
        <button>Login</button>
    </StyledLogin>
    )}
    


export default LogInForm
