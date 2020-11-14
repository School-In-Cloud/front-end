import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import "./index.css";
import App from "./App";

//Router
import { BrowserRouter as Router } from "react-router-dom";

//Redux
import store from './redux-store/store/store'

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById("root")
);
