import * as yup from "yup";

export default yup.object().shape({
    username:yup
        .string()
        .required("Please enter your username"),
        
    password:yup
        .string()
        .required("Please enter your password"),
})