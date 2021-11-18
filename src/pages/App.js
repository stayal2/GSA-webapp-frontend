import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import './App.css';

import {signInWithToken} from "../utils/auth";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
import Navbar from "../components/Navbar";
import Tool from "./Tool";
import ExperimentView from "./ExperimentView";


export const GlobalContext = React.createContext();

const App = () => {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const trySignIn = async () => {
      const token = window.sessionStorage.getItem('token');
      if (token) {
        console.log('here')
        const signInResult = await signInWithToken(token);
        setSignedIn(signInResult);
      }
    }
    trySignIn();
  }, [])

  return (
    <GlobalContext.Provider value={{signedIn, setSignedIn}}>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/tool'>
            <Tool/>
          </Route>
          <Route path='/tool/experiments'>
            <ExperimentView/>
          </Route>
          <Route path='/signin'>
            <Signin/>
          </Route>
          <Route path='/signup'>
            <Signup/>
          </Route>
        </Switch>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
