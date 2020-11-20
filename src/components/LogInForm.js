import { useState } from "react";
import * as yup from "yup";
import LoginFormSchema from "../Validation/LoginFormSchema";
import { connect } from "react-redux";
import { userSignIn } from "../redux-store/actions/userActions";
import { useHistory } from "react-router-dom";
const LogInForm = ({ userType, userSignIn }) => {
    const history = useHistory()
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
  };

  return (
    <>
      {userType ? <button onClick={() => history.push(`/${userType}`)}>take me to {userType}</button> : ""}
      <form onSubmit={onSubmit}>
        <div>Login</div>
        <label>
          Username
          <input
            name="username"
            type="text"
            onChange={onChange}
            value={formData.email}
          ></input>
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            onChange={onChange}
            value={formData.password}
          ></input>
          <button>Login</button>
        </label>
      </form>
    </>
  );
};

const matchStateToProps = (dispatch) => {
  return {
    userSignIn: (user) => dispatch(userSignIn(user)),
  };
};

const mapStateToProps = (state) => {
  const { userType } = state.userType;
  return {
    userType,
  };
};

export default connect(mapStateToProps, matchStateToProps)(LogInForm);
