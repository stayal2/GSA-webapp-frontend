import React, {useContext, useEffect} from 'react'
import {Line} from "react-chartjs-2";
import {Chart} from "chart.js/auto";

import {ExperimentContext} from "../pages/ExperimentView";
import PreparationSteps from "../containers/PreparationSteps";

const Recipe = () => {
  const {experiment, recipeGraphData, dispatch} = useContext(ExperimentContext)

  useEffect(() => {
    dispatch({type: 'INIT_GRAPH_DATA'})
  }, [])

  const recipe = experiment.recipe
  if (!recipe) {
    return null
  }
  const preparationSteps = recipe.preparation_steps
  const displayPrepSteps =
    preparationSteps
      ? <PreparationSteps preparationSteps={preparationSteps}/>
      : null
  const carbonSource = recipe.carbon_source.value
  const basePressure = recipe.base_pressure.value

  const displayCarbonSource =
    carbonSource
      ? <span className='md:w-1/2'>{carbonSource}</span>
      : <span className='md:w-1/2'>-</span>
  const displayBasePressure =
    basePressure
      ? <span className='md:w-1/2'>{basePressure} Torr</span>
      : <span className='md:w-1/2'>-</span>
  console.log(recipeGraphData)

  return (
    <div className='flex flex-col py-2 px-4 mb-2 border'>
      <div className='flex justify-between'>
        <h6 className='font-bold ml-3'> Recipe #{recipe.id}</h6>
      </div>
      <hr className='my-1'/>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Carbon Source :</span>
        {displayCarbonSource}
      </div>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Base Pressure :</span>
        {displayBasePressure}
      </div>
      <hr className='my-1'/>
      {displayPrepSteps}
      {recipeGraphData &&
      <div className='w-full h-screen-3/4'>
        <h4 className='text-center text-3xl font-bold my-3'>Recipe Graph</h4>
        <p className='text-center my-3'>x axis: time (min), y axis: value (unit described in the ledger)</p>
        <Line
          data={recipeGraphData}
          options={{
            scales: {
              x: {
                type: 'linear',
              }
            }
          }}
        />
      </div>}
    </div>
  )
}

export default Recipe
