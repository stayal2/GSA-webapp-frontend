import React, { useContext } from 'react'
import PreparationSteps from '../containers/PreparationSteps'
import { ToolContext } from '../pages/Tool'

const Recipe = ({ idx, id, carbonSource, basePressure, preparationSteps, isFilter }) => {
  const { dispatch } = useContext(ToolContext)

  const displayCarbonSource =
    carbonSource
      ? <span className='md:w-1/2'>{carbonSource}</span>
      : <span className='md:w-1/2'>-</span>

  const displayBasePressure =
    basePressure
      ? <span className='md:w-1/2'>{basePressure} Torr</span>
      : <span className='md:w-1/2'>-</span>

  let btn = null
  if (isFilter) {
    btn = (
      <button
        className='w-9 h-9 text-center bg-red-500 hover:bg-red-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
        type='button'
        onClick={() => {
          dispatch({ type: 'DEL_RECIPE_FILTER', payload: { idx: idx } })
        }}
      >
        -
      </button>
    )
  } else {
    btn = (
      <button
        className='w-9 h-9 text-center bg-green-500 hover:bg-green-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
        type='button'
        onClick={() => {
          dispatch({ type: 'ADD_RECIPE_FILTER', payload: { idx: idx } })
        }}
      >
        +
      </button>
    )
  }
  return (
    <div className='flex flex-col py-2 px-4 mb-2 border'>
      <div className='flex justify-between'>
        <h6 className='font-bold ml-3'> Recipe #{id}</h6>
        {btn}
      </div>
      <hr className='my-1' />
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Carbon Source :</span>
        {displayCarbonSource}
      </div>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Base Pressure :</span>
        {displayBasePressure}
      </div>
      <hr className='my-1' />
      <PreparationSteps
        preparationSteps={preparationSteps}
      />
    </div>
  )
}

export default Recipe
