import { Route, Redirect } from "react-router-dom";
import React from "react";

const PrivateRoute = ({
  component: Component,
  userType,
  loggedInType,
  ...rest
}) => {
  const isLoggedIn = true; //localStorage.getItem('token')

  return (
    <Route
      {...rest}
      render={() => {
        if (isLoggedIn && userType === loggedInType) {
          return <Component />;
        }
        return <Redirect to="/signup-login" />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
