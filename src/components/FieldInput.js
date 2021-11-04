import React from 'react';


const FieldInput = ({ type, label, id, step, ineqType, valueType, unit, options, dispatch }) => {
  if (type === "number") {
    return (
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor={id}>{label}</label>
        </div>
        <div className="md:w-2/3">
          <div class="inline-block relative md:w-1/4">
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={e => dispatch({ type: ineqType, payload: e.target.value })}>
              <option className="text-center" value="eq">=</option>
              <option value="ne">&#8800;</option>
              <option value="lt">&#60;</option>
              <option value="le">&#8804;</option>
              <option value="gt">&#62;</option>
              <option value="ge">&#8805;</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 md:w-1/2"
            id={id} type="number" step={step} onChange={e => dispatch({ type: valueType, payload: e.target.value })} />
          <span className="md:w-1/4"> {unit} </span>
        </div>
      </div>
    )
  } else if (type = "select") {
    return (
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor={id}>{label}</label>
        </div>
        <div className="md:w-2/3">
          <div class="inline-block relative md:w-3/4">
            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={e => dispatch({ type: valueType, payload: e.target.value })}>
              <option value="">No Selection</option>
              {options.map((option) => <option>{option}</option>)}
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
      </div>
    )
  } else if (type = "text")
    return (
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor={id}>{label}</label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id={id} type="text" onChange={e => dispatch({ type: valueType, payload: e.target.value })} />
        </div>
      </div>
    )
  return <React.Fragment></React.Fragment>
}

export default FieldInput;