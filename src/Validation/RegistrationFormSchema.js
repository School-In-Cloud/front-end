import * as yup from "yup";

export default yup.object().shape({
  name: yup

    .string()
    .required("Please enter your name")
    .min(3, "Name must be at least 3 characters long"),
  
  email:yup
    
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
   
  password: yup
    
    .string()
    .required("Please enter a valid password")
    .min(5, "Password should be at least 5 characters long"),

  role: yup
    .string()
    .oneOf(["student", "volunteer", "admin"], "Please select a role"),

  country:yup
    .string()
    .required("Please enter your desired country")
    .min(4,"Country name must be a minimum of 4 characters")
});
