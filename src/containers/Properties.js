import React from 'react'
import Property from "../components/Property";


const Properties = ({properties, isFilter}) => {
  if (!properties) {
    return null
  }
  let scrollbarClass = 'w-full'
  if (!isFilter) {
    scrollbarClass += ' border p-3 h-screen-3/4  overflow-y-scroll'
  }
  return (
    <div className={scrollbarClass}>
      {properties.map((property, i) =>
        <Property
          key={i}
          idx={i}
          id={property.id}
          avgThicknessOfGrowth={property.average_thickness_of_growth.value}
          stdDevOfGrowth={property.standard_deviation_of_growth.value}
          numLayers={property.number_of_layers.value}
          growthCoverage={property.growth_coverage.value}
          domainSize={property.domain_size.value}
          shape={property.shape.value}
          isAddedToFilter={property.isAddedToFilter}
          isFilter={isFilter}
        />
      )}
    </div>
  )
}

export default Properties
