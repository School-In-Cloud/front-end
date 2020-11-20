import React from 'react'
import RegistrationForm from './RegistrationForm'
import LogInForm from './LogInForm'

//import login and reg, this will be the styling section
function SignupAndLogin() {
    return (
        <div>
        <h1 className="header">Welcome to school in the cloud</h1>
        <div className='container form-cont'>
           <RegistrationForm/>
           <LogInForm/>
        </div>
        </div>
    )
}

export default SignupAndLogin
