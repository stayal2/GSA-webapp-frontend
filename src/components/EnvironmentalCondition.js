import React from 'react'

const EnvironmentalCondition = ({ id, ambientTemperature, ambientTemperatureUnit, dewPoint, dewPointUnit }) => {
  const displayAmbientTemperature =
    ambientTemperature
      ? <span className='md:w-1/2'>{ambientTemperature} &deg;C</span>
      : <span className='md:w-1/2'>-</span>

  const displayDewPoint =
    dewPoint
      ? <span className='md:w-1/2'>{dewPoint} &deg;C</span>
      : <span className='md:w-1/2'>-</span>

  return (
    <div className='flex flex-col py-2 px-4 mb-2 border'>
      <div className='flex justify-between'>
        <h6 className='font-bold ml-3'> Environmental Condition #{id}</h6>
        <button
          className='w-9 h-9 text-center bg-green-500 hover:bg-green-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
          type='button'
          onClick={() => { }}
        >
          +
        </button>
      </div>
      <hr className='my-1' />
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Ambient Temperature :</span>
        {displayAmbientTemperature}
      </div>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Dew Point :</span>
        {displayDewPoint}
      </div>
    </div>
  )
}

export default EnvironmentalCondition
