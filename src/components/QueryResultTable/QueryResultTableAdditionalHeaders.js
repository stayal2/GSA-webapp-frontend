import React, {useContext} from "react";
import {GlobalContext} from "../../pages/App";

export const isDefault = (filter) => {
  if (!filter.name) return false
  const name = filter.name.toLowerCase()
  return (
    name.includes('number of layers')
    || name.includes('growth coverage')
    || name.includes('carbon source')
    || name.includes('author')
  )
}

const QueryResultTableAdditionalHeaders = () => {
  const {toolState} = useContext(GlobalContext)
  return (
    <>
      {toolState.savedFilters
        .filter(filter => !isDefault(filter))
        .map(filter =>
          <th scope="col"
              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
            {filter.name}
          </th>
        )
      }
    </>
  )
}
export default QueryResultTableAdditionalHeaders