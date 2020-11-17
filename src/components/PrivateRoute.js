import { Route, Redirect } from "react-router-dom";
import React from "react";


const PrivateRoute = ({
  component: Component,
  componentType,
  ...rest
}) => {
  const isLoggedIn = localStorage.getItem('token')
  const userType = localStorage.getItem('userType')
  console.log(componentType===userType)
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

export default PrivateRoute;
