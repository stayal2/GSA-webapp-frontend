import React, {useEffect, useReducer, useState} from "react";
import experimentReducer, {experimentDefaultState} from "../reducers/experimentReducer";
import {host} from "../settings";
import axios from "axios";
import {Redirect} from "react-router-dom";

import ExperimentDetails from "../containers/ExperimentDetails";

export const ExperimentContext = React.createContext();

const ExperimentView = () => {
  const [experimentId, setExperimentId] = useState(null)
  const [isError, setIsError] = useState(false)
  const [experimentState, experimentDispatch] = useReducer(experimentReducer, experimentDefaultState)

  const getExperiment = async (experimentId) => {
    const url = host + '/experiments/' + experimentId
    try {
      const response = await axios.get(url)
      const data = response.data
      experimentDispatch({type: 'SET_EXPERIMENT', payload: data})
    } catch (e) {
      console.log(e)
    }
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
  if (!experimentState.experiment) {
    return <></>
  }
  return (
    <ExperimentContext.Provider value={{...experimentState, experimentDispatch}}>
      <div className='w-full container mx-auto my-5'>
        <h2 className='text-center text-4xl font-bold mr-2 mb-4'>Experiment {experimentState.experiment.id}</h2>
        <ExperimentDetails/>
      </div>
    </ExperimentContext.Provider>
  )
}

export default ExperimentView;