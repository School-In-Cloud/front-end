import React, { useEffect, useState } from "react";
import * as yup from "yup";
import RegistrationFormSchema from "../Validation/RegistrationFormSchema";
import {StyledForm, StyledErrors} from "../Styling/StyledComponents"

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
    country: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    country: "",
  });

  const [disabled, setDisabled] = useState(true);

  const inputChange = (name, value) => {
    yup
      .reach(RegistrationFormSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // useEffect(()=>{
  //     RegistrationFormSchema.isValid(formData).then((valid)=>{
  //         setDisabled(!valid);
  //     })
  // },[formData])//setup for disabling submit button unless all information is filled in correctly

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const correctValue = type === "checkbox" ? checked : value;
    inputChange(name, correctValue);
  };
  return (
    <form>
      <div className="errors">
        <StyledErrors>
        <div>{formErrors.name}</div>
        <div>{formErrors.email}</div>
        <div>{formErrors.password}</div>
        <div>{formErrors.role}</div>
        <div>{formErrors.country}</div>
      </StyledErrors>
      </div>
      <StyledForm>
        Registration
        <label>
         
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={onChange}
            value={formData.name}
          ></input>
        </label>
        <label>
        
          <input
            name="email"
            type="text"
            placeholder="Email address"
            onChange={onChange}
            value={formData.email}
          ></input>
        </label>
        <label>
        
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={onChange}
            value={formData.password}
          ></input>
        </label>
        <label>
          Role
          <select name="role" onChange={onChange} value={formData.role}>
            <option value="">-Select a role-</option>
            <option value="student">Student</option>
            <option value="volunteer">Volunteer</option>
            <option value="admin">Admin</option>
          </select>
        </label>
       <p>Days available</p> 
        <label>
          
          Monday
          <input
            type="checkbox"
            name="monday"
            onChange={onChange}
            checked={formData.monday}
          ></input>
        </label>
        <label>
          Tuesday
          <input
            type="checkbox"
            name="tuesday"
            onChange={onChange}
            checked={formData.tuesday}
          ></input>
        </label>
        <label>
          Wednesday
          <input
            type="checkbox"
            name="wednesday"
            onChange={onChange}
            checked={formData.wednesday}
          ></input>
        </label>
        <label>
          Thursday
          <input
            type="checkbox"
            name="thursday"
            onChange={onChange}
            checked={formData.thursday}
          ></input>
        </label>
        <label>
          Friday
          <input
            type="checkbox"
            name="friday"
            onChange={onChange}
            checked={formData.friday}
          ></input>
        </label>
        <label>
          Saturday
          <input
            type="checkbox"
            name="saturday"
            onChange={onChange}
            checked={formData.saturday}
          ></input>
        </label>
        <label>
          Sunday
          <input
            type="checkbox"
            name="sunday"
            onChange={onChange}
            checked={formData.sunday}
          ></input>
        </label>
        <label>
          
          <input
            name="country"
            placeholder="Country"
            type="text"
            onChange={onChange}
            value={formData.country}
          ></input>
        </label>
      <button>Register</button>
      </StyledForm>
    </form>
  );
};
export default RegistrationForm;
