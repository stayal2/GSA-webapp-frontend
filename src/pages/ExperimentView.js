import React, {useEffect, useReducer, useState} from "react";
import experimentReducer, {defaultState} from "../reducers/experimentReducer";
import {host} from "../settings";
import axios from "axios";
import {Redirect} from "react-router-dom";
import Experiment from "../components/Experiment";

export const ExperimentContext = React.createContext();

const ExperimentView = () => {
  const [experimentId, setExperimentId] = useState(null)
  const [isError, setIsError] = useState(false)
  const [state, dispatch] = useReducer(experimentReducer, defaultState)

  const getExperiment = async (experimentId) => {
    const url = host + '/experiments/' + experimentId
    try {
      const response = await axios.get(url)
      const data = response.data
      console.log(data)
      dispatch({type: 'SET_EXPERIMENT', payload: data})
    } catch (e) {
      console.log(e)
    }
    console.log(state)
  }
  useEffect(() => {
    const expId = parseInt(window.location.pathname.slice(1).split('/')[2])
    if (isNaN(expId)) {
      setIsError(true)
    }
    setExperimentId(expId)
  }, [])
  useEffect(() => {
    if (experimentId) {
      getExperiment(experimentId)
    }
  }, [experimentId])

  if (isError) {
    return < Redirect to='/tool'/>
  }
  if (!state.experiment) {
    return <></>
  }
  return (
    <ExperimentContext.Provider value={{experiment: state.experiment}}>
      <h1>{state.experiment.id}</h1>
      <Experiment/>
    </ExperimentContext.Provider>
  )
}

export default ExperimentView;