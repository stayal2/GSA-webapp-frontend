import React from "react"
import SearchFilter from "../components/SearchFilter";


const SearchFilters = (filters) => {
  return (
    filters.filters.map((filter, i) => {
        return <SearchFilter key={i}
                             idx={i}
                             name={filter.name}
                             min={filter.min}
                             max={filter.max}
                             value={filter.value}
        />
      }
    )
  )
}

export default SearchFilters