import { useState } from "react";
import * as yup from "yup";
import LoginFormSchema from "../Validation/LoginFormSchema";
import { connect } from "react-redux";
import { userSignIn } from "../redux-store/actions/userActions";
import { useHistory } from "react-router-dom";
const LogInForm = ({ userSignIn }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
  });

  const inputChange = (name, value) => {
    yup
      .reach(LoginFormSchema, name)
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

  const onChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newLogin = {
      username: formData.username.trim(),
      password: formData.password.trim(),
    };
    userSignIn(newLogin);
    setFormData({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h2 className="form-header">Please Login</h2>
        <div className="registration">
          <label>
            <i className="fas fa-user"></i>
            <input
              name="username"
              type="text"
              onChange={onChange}
              value={formData.email}
              placeholder="Username"
            ></input>
          </label>

          <label>
            <i className="fas fa-key"></i>
            <input
              name="password"
              type="password"
              onChange={onChange}
              value={formData.password}
              placeholder="Password"
            ></input>
          </label>
          <button className="btn">Login</button>
        </div>
      </form>
    </>
  );
};

const matchStateToProps = (dispatch) => {
  return {
    userSignIn: (user) => dispatch(userSignIn(user)),
  };
};


export default connect(null, matchStateToProps)(LogInForm);
