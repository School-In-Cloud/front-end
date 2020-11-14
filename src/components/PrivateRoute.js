import { Route, Redirect } from "react-router-dom";
import React from "react";

const PrivateRoute = ({
  component: Component,
  userType,
  loggedInType,
  ...rest
}) => {
  const isLoggedIn = true; //localStorage.getItem('token') ? true : false

  return (
    <Route
      {...rest}
      render={() => {
        if (isLoggedIn && userType === loggedInType) {
          return <Component />;
        }
        return <Redirect to="/" />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
