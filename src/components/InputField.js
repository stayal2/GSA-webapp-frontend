import React from 'react';

const InputField = (id, label) => {
  return (
    <div className='md:flex md:items-center mb-6'>
      <div className='md:w-1/3'>
        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor={id}>{label}</label>
      </div>
      <div className='md:w-2/3'>
        <div class='inline-block relative md:w-3/4'>
          <select
            class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
            onChange={e => dispatch({ type: valueType, payload: e.target.value })}
          >
            <option value=''>No Selection</option>
            {options.map((option) => <option>{option}</option>)}
          </select>
          <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
            <svg class='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' /></svg>
          </div>
        </div>
      </div>
    </div>
  )
};

export default InputField;
