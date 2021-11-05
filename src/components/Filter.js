import React, { useContext } from 'react';
import { ToolContext } from '../pages/Tool';

const Filter = ({ i, field, value, ineq, unit }) => {
  const { dispatch } = useContext(ToolContext);

  const removeFilter = () => {
    dispatch({ type: "REMOVE_FILTER", payload: i });
  }

  let ineqBlock = null;
  if (ineq === 'eq') {
    ineqBlock = <span className="px-1 py-2 block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">=</span>;
  } else if (ineq === 'ne') {
    ineqBlock = <span className="px-1 py-2 block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">&#8800;</span>;
  } else if (ineq === 'lt') {
    ineqBlock = <span className="px-1 py-2 block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">&#60;</span>;
  } else if (ineq === 'le') {
    ineqBlock = <span className="px-1 py-2 block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">&#8804;</span>;
  } else if (ineq === 'gt') {
    ineqBlock = <span className="px-1 py-2 block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">&#62;</span>;
  } else if (ineq === 'ge') {
    ineqBlock = <span className="px-1 py-2 block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">&#8805;</span>;
  }
  let unitBlock = null;

  if (unit) {
    if (unit === 'mm&sup2;') {
      unitBlock = <span className="px-1 py-2 block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">mm&sup2;</span>
    } else if (unit === '&deg;C') {
      unitBlock = <span className="px-1 py-2 block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">&deg;C</span>
    } else if (unit === 'um&sup2;') {
      unitBlock = <span className="px-1 py-2 block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">um&sup2;</span>
    } else {
      unitBlock = <span className="px-1 py-2 block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">{unit}</span>
    }
  }
  return (
    <React.Fragment>
      <div className="md:w-full flex justify-between bg-gray-200">
        <div className="md:w-9/12 flex">
          <span className="px-1 py-2 md:w-1/2 block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">{field} : </span>
          {ineqBlock}
          <span className="px-1 py-2 block text-gray-700 font-bold md:text-left mb-1 md:mb-0 pr-4">{value}</span>
          {unitBlock}
        </div>
        <button className="md:w-2/12 bg-gray-300 hover:bg-gray-400 text-gray-800 items-center"
          onClick={removeFilter}>remove</button>
      </div>
    </React.Fragment>
  )
}

export default Filter;
