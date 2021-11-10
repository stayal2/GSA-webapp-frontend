import React from 'react'
import Substrate from '../components/Substrate'

const Substrates = ({ substrates, isFilter }) => {
  if (!substrates) {
    return null
  }
  return (
    substrates.map((substrate, i) =>
      <Substrate
        key={substrate.id}
        idx={i}
        id={substrate.id}
        catalyst={substrate.catalyst.value}
        thickness={substrate.thickness.value}
        diameter={substrate.diameter.value}
        length={substrate.length.value}
        surfaceArea={substrate.surface_area.value}
        isFilter={isFilter}
      />
    )
  )
}

export default Substrates
