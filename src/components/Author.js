import React, {useContext} from "react";
import {ToolContext} from "../pages/Tool";

const Author = ({idx, id, firstName, lastName, institution, isAddedToFilter, isFilter}) => {
  const {dispatch} = useContext(ToolContext)

  const displayName =
    <span className='md:w-1/2'>{firstName} {lastName}</span>
  const displayInstitution =
    <span className='md:w-1/2'>{institution}</span>

  let btn
  if (isFilter) {
    btn = (
      <button
        className='w-9 h-9 text-center bg-red-500 hover:bg-red-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
        type='button'
        onClick={() => {
          dispatch({type: 'DEL_AUTHOR_FILTER', payload: {idx: idx}})
        }}
      >
        -
      </button>
    )
  } else if (isAddedToFilter) {
    btn = (
      <button
        disabled
        className='cursor-default px-2 h-9 text-center bg-purple-500 text-white text-xl font-bold rounded focus:outline-none focus:shadow-outline'
      >
        Added
      </button>
    )
  } else {
    btn = (
      <button
        className='w-9 h-9 text-center bg-green-500 hover:bg-green-700 text-white text-3xl font-bold rounded focus:outline-none focus:shadow-outline'
        type='button'
        onClick={() => {
          dispatch({type: 'ADD_AUTHOR_FILTER', payload: {idx: idx}})
        }}
      >
        +
      </button>
    )
  }

  return (
    <div className='flex flex-col py-2 px-4 mb-2 border rounded'>
      <div className='flex justify-between'>
        <h6 className='font-bold ml-3'> Author #{id}</h6>
        {btn}
      </div>
      <hr className='my-1'/>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Name :</span>
        {displayName}
      </div>
      <div className='w-full md:flex md:items-center mb-1'>
        <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Institution :</span>
        {displayInstitution}
      </div>
    </div>
  )
}
export default Author