import React, { useState } from "react";
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";

import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";

import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
