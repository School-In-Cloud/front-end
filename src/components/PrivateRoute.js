import { Route, Redirect } from "react-router-dom";
import React from "react";
import {connect} from 'react-redux'


const PrivateRoute = ({
  component: Component,
  userType,
  componentType,
  ...rest
}) => {
  const isLoggedIn = localStorage.getItem('token')
  console.log(userType, isLoggedIn)
  return (
    <Route
      {...rest}
      render={() => {
        if (isLoggedIn && userType === componentType) {
          return <Component />;
        }
        return <Redirect to="/signup-login" />;
      }}
    ></Route>
  );
};

const matchStateToProps = state => {
  const {userType} = state.userType
  return {
    userType
  }
}

export default connect(matchStateToProps,{})(PrivateRoute);
