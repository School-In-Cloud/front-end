import PrivateRoute from "./components/PrivateRoute";
import { Route } from "react-router-dom";
import Admin from "./components/Admin";
import Volunteer from "./components/Volunteer";
import Student from "./components/Student";

import SignupAndLogin from "./components/SignupAndLogin";
import Navbar from './components/Navbar'

const App = () => {
  const loggedInType = 1;
  return (
    <div>
      <Navbar/>

      <Route exact path="/" component={SignupAndLogin} />
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
