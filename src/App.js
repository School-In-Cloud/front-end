import React from "react";
import PrivateRoute from "./components/PrivateRoute";
import { Route } from "react-router-dom";
import Admin from "./components/Admin";
import Volunteer from "./components/Volunteer";
import Student from "./components/Student";
import LogIn from "./components/LogIn";

const App = () => {
  const loggedInType = "admin";
  return (
    <div>
      <Route exact path="/" component={LogIn} />
      <PrivateRoute
        exact
        path="/admin"
        userType={1}
        loggedInType={loggedInType}
        component={Admin}
      />
      <PrivateRoute
        exact
        path="/volunteer"
        userType={3}
        loggedInType={loggedInType}
        component={Volunteer}
      />
      <PrivateRoute
        exact
        path="/student"
        userType={2}
        loggedInType={loggedInType}
        component={Student}
      />
    </div>
  );
};

export default App;
