import React, {useContext} from "react"
import {GlobalContext} from "../pages/App";

const SearchFilter = ({idx, name, min, max, value}) => {
  const {toolDispatch} = useContext(GlobalContext)

  return (
    <div className='flex flex-col py-2 px-4 mb-2 border'>
      <div className='flex justify-between'>
        <h6 className='font-bold ml-3'>{name}</h6>
        <button
          className='w-6 h-6 text-center bg-red-500 hover:bg-red-700 text-white text-md font-bold rounded focus:outline-none focus:shadow-outline'
          type='button'
          onClick={() => {
            toolDispatch({type: 'REMOVE_FILTER', payload: idx})
          }}
        >
          ✕
        </button>
      </div>
      <hr className='my-1'/>
      {value &&
        <div className='w-full md:flex md:items-center mb-1'>
          <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Name :</span>
          {value}
        </div>
      }
      {!value &&
        <>
          <div className='w-full md:flex md:items-center mb-1'>
            <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Min :</span>
            {min}
          </div>
          <div className='w-full md:flex md:items-center mb-1'>
            <span className='md:w-1/2 block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Max :</span>
            {max}
          </div>
        </>
      }
    </div>
  )
}

export default SearchFilter