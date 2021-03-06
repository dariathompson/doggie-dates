import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentDog, logoutDog } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import './App.css';

import "materialize-css/dist/css/materialize.min.css";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Profile from "./components/profile/Profile";
import Show from "./components/show/Show";
import Matches from "./components/matches/Matches";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentDog(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutDog());
    // Redirect to login
    window.location.href = "./login";
  }
}

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/show" component={Show} />
            <PrivateRoute exact path="/matches" component={Matches} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
