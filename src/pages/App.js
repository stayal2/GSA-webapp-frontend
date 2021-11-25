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
  const [successMsg, setSuccessMsg] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  const flashSuccess = (text) => {
    let msg =
      <div
        className='w-full bg-green-400 rounded text-center text-green-100 font-bold text-2xl py-2 mb-4'>
        {text}
      </div>
    setSuccessMsg(msg)
    setTimeout(() => {
      setSuccessMsg(null)
    }, 5000)
  }
  const flashError = (text) => {
    let msg =
      <div
        className='w-full bg-red-600 rounded text-center text-green-100 font-bold text-2xl py-2 mb-4'>
        {text}
      </div>
    setErrorMsg(msg)
    setTimeout(() => {
      setErrorMsg(null)
    }, 5000)
  }
  useEffect(() => {
    const trySignIn = async () => {
      const token = window.localStorage.getItem('token');
      if (token) {
        const signInResult = await signInWithToken(token);
        setSignedIn(signInResult);
      }
      console.log(signedIn)
    }
    trySignIn();
  }, [])

  return (
    <GlobalContext.Provider value={{signedIn, setSignedIn, flashSuccess, flashError}}>
      <Router>
        <Navbar/>
        {successMsg}
        {errorMsg}
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
        <div className='h-96'/>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
