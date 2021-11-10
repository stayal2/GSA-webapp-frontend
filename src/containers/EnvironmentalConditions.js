import React from 'react'

import EnvironmentalCondition from '../components/EnvironmentalCondition'

const EnvironmentalConditions = ({ environmentalConditions, isFilter }) => {
  if (!environmentalConditions) {
    return null
  }
  return (
    environmentalConditions.map((envCon, i) =>
      <EnvironmentalCondition
        key={i}
        idx={i}
        id={envCon.id}
        ambientTemperature={envCon.ambient_temperature.value}
        dewPoint={envCon.dew_point.value}
        isFilter={isFilter}
      />)
  )
}

export default EnvironmentalConditions
