import PrivateRoute from "./components/PrivateRoute";
import { Route } from "react-router-dom";
import Admin from "./components/Admin";
import Volunteer from "./components/Volunteer";
import Student from "./components/Student";
import LogInForm from "./components/LogInForm";
import RegistrationForm from "./components/RegistrationForm"

const App = () => {
  const loggedInType = "admin";
  return (
    <div>
      <Route exact path="/" component={LogInForm} />
      <br></br>
      <Route exact path="/" component={RegistrationForm} />
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
