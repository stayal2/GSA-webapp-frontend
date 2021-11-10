import React from 'react'

import Furnace from '../components/Furnace'

const Furnaces = ({ furnaces, isFilter }) => {
  if (!furnaces) {
    return null
  }
  return (
    furnaces.map((furnace, i) =>
      <Furnace
        key={i}
        idx={i}
        id={furnace.id}
        tubeDiameter={furnace.tube_diameter.value}
        crossSectionalArea={furnace.cross_sectional_area.value}
        tubeLength={furnace.tube_length.value}
        lengthOfHeatedRegion={furnace.length_of_heated_region.value}
        isFilter={isFilter}
      />
    )
  )
}

export default Furnaces
