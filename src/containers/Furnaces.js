import React from 'react'

import Furnace from '../components/Furnace'

const Furnaces = ({furnaces, isFilter}) => {
  if (!furnaces) {
    return null
  }
  let scrollbarClass = 'w-full'
  if (!isFilter) {
    scrollbarClass += ' border p-3 h-screen-3/4  overflow-y-scroll'
  }
  return (
    <div className={scrollbarClass}>
      {furnaces.map((furnace, i) =>
        <Furnace
          key={i}
          idx={i}
          id={furnace.id}
          tubeDiameter={furnace.tube_diameter.value}
          crossSectionalArea={furnace.cross_sectional_area.value}
          tubeLength={furnace.tube_length.value}
          lengthOfHeatedRegion={furnace.length_of_heated_region.value}
          isAddedToFilter={furnace.isAddedToFilter}
          isFilter={isFilter}
        />
      )}
    </div>
  )
}

export default Furnaces
