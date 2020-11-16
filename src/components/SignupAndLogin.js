import React from 'react'
import RegistrationForm from './RegistrationForm'
import LogInForm from './LogInForm'

//import login and reg, this will be the styling section
function SignupAndLogin() {
    return (
        <div>
           <RegistrationForm/>
           <LogInForm/>
        </div>
    )
}

export default SignupAndLogin
