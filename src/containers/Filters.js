import React from 'react';

import Filter from '../components/Filter';

const Filters = ({ filters, fetchData }) => {
  const showFilters = filters.length > 0;

  return (
    <div className="md:w-full flex flex-col">
      <h2 className="text-center text-3xl font-bold mr-2 md:mb-4">Current Filters</h2>
      {!showFilters &&
        <div className="bg-gray-200 px-1 py-2 block text-gray-700 font-bold text-center mb-1 md:mb-0">
          No filter added
        </div>
      }
      {showFilters &&
        filters.map((filter, i) =>
          <Filter
            key={i}
            i={i}
            field={filter.field}
            value={filter.value}
            ineq={filter.ineq}
            unit={filter.unit}
          />)
      }
      <button className="self-center w-1/4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
        type="button" onClick={() => fetchData(filters)}>
        Fetch Data
      </button>
    </div>
  )
}

export default Filters;
