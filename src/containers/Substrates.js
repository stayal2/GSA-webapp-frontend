import React from 'react'
import Substrate from '../components/Substrate'

const Substrates = ({substrates, isFilter}) => {
  if (!substrates) {
    return null
  }
  let scrollbarClass = 'w-full'
  if (!isFilter) {
    scrollbarClass += ' border p-3 h-screen-3/4  overflow-y-scroll'
  }
  return (
    <div className={scrollbarClass}>
      {substrates.map((substrate, i) =>
        <Substrate
          key={substrate.id}
          idx={i}
          id={substrate.id}
          catalyst={substrate.catalyst.value}
          thickness={substrate.thickness.value}
          diameter={substrate.diameter.value}
          length={substrate.length.value}
          surfaceArea={substrate.surface_area.value}
          isAddedToFilter={substrate.isAddedToFilter}
          isFilter={isFilter}
        />
      )}
    </div>
  )
}

export default Substrates
