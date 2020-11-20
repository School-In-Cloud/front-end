import PrivateRoute from "./components/PrivateRoute";
import { Route } from "react-router-dom";
import Admin from "./components/Admin";
import Volunteer from "./components/Volunteer";
import Student from "./components/Student";

import Home from './components/Home'
import SignupAndLogin from "./components/SignupAndLogin";
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Route exact path="/" component={SignupAndLogin} />
      <PrivateRoute
        exact
        path="/admin"
        componentType={'admin'}
        component={Admin}
      />
      <PrivateRoute
        exact
        path="/volunteer"
        componentType={'volunteer'}
        component={Volunteer}
      />
      <PrivateRoute
        exact
        path="/student"
        componentType={'student'}
        component={Student}
      />
    </div>
  );
};

export default App;
