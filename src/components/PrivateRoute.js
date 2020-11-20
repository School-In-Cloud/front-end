import { Route, Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";


const PrivateRoute = ({
  component: Component,
  componentType,
  userType,
  token,
  ...rest
}) => {
  
  return (
    <Route
      {...rest}
      render={() => {
        if (token && componentType === userType) {
          return <Component />;
        }
        return <Redirect to="/" />;
      }}
    ></Route>
  );
};

const mapStateToProps = state => {
  const {userType, token} = state.userType
  return {
      userType,
      token
  }
}

export default connect(mapStateToProps,{})(PrivateRoute);
