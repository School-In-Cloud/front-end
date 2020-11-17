import {useState} from 'react'
import * as yup from 'yup'
import LoginFormSchema from '../Validation/LoginFormSchema'
import {connect} from 'react-redux'
import {userSignIn} from '../redux-store/actions/userActions'
import {useHistory} from 'react-router-dom'
const LogInForm = (props) => {
    const history = useHistory()
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

    const onSubmit = (e) => {
        e.preventDefault()
        const newLogin = {
            username: formData.username.trim(),
            password: formData.password.trim()
        }
        props.userSignIn(newLogin)
        history.push(`${localStorage.getItem('userType')}`)
    }
    
    return (
        <form onSubmit={onSubmit}>
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
    
const matchStateToProps = dispatch => {
    return {
        userSignIn: user => dispatch(userSignIn(user))
    }
}

export default connect(null, matchStateToProps)(LogInForm
)