import React from 'react'

import EnvironmentalCondition from '../components/EnvironmentalCondition'

const EnvironmentalConditions = ({environmentalConditions, isFilter}) => {
  if (!environmentalConditions) {
    return null
  }
  let scrollbarClass = 'w-full'
  if (!isFilter) {
    scrollbarClass += ' border p-3 h-screen-3/4  overflow-y-scroll'
  }
  return (
    <div className={scrollbarClass}>
      {environmentalConditions.map((envCon, i) =>
        <EnvironmentalCondition
          key={i}
          idx={i}
          id={envCon.id}
          ambientTemperature={envCon.ambient_temperature.value}
          dewPoint={envCon.dew_point.value}
          isAddedToFilter={envCon.isAddedToFilter}
          isFilter={isFilter}
        />)}
    </div>
  )
}

export default EnvironmentalConditions
