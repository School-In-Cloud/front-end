import React, { useEffect, useState } from "react";
import * as yup from "yup";
import RegistrationFormSchema from "../Validation/RegistrationFormSchema";
import { registerUser } from "../redux-store/actions/userActions";
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
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

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: formData.name.trim(),
      password: formData.password.trim(),
      user_type: formData.role,
      country: formData.country.trim(),
    };
    registerUser(newUser);
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "",
      country: "",
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="errors">
        <div>{formErrors.name}</div>
        <div>{formErrors.email}</div>
        <div>{formErrors.password}</div>
        <div>{formErrors.role}</div>
        <div>{formErrors.country}</div>
      </div>
      <div className="registration">
        <h2 className="form-header">Register Now</h2>
        <label>
          <i className="fas fa-user"></i>
          <input
            name="name"
            type="text"
            placeholder="Username"
            onChange={onChange}
            value={formData.name}
          ></input>
        </label>
        <label>
          <i className="fas fa-envelope"></i>
          <input
            name="email"
            type="text"
            placeholder="Please enter a valid Email address"
            onChange={onChange}
            value={formData.email}
          ></input>
        </label>
        <label>
          <i className="fas fa-key"></i>
          <input
            name="password"
            type="password"
            placeholder="Please enter a desired password"
            onChange={onChange}
            value={formData.password}
          ></input>
        </label>
        <label>
          <i className="fab fa-redhat"></i>
          <select name="role" onChange={onChange} value={formData.role}>
            <option value="">-Select a role-</option>
            <option value="student">Student</option>
            <option value="volunteer">Volunteer</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <label>
          <i className="fas fa-globe-americas"></i>
          <input
            name="country"
            type="text"
            onChange={onChange}
            value={formData.country}
            placeholder="Please add your country"
          ></input>
        </label>
      </div>
      <button className="btn">Register</button>
    </form>
  );
};

export default RegistrationForm;
