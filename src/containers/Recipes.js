import React from 'react'

import Recipe from '../components/Recipe'

const Recipes = ({recipes, isFilter}) => {
  if (!recipes) {
    return null
  }
  let scrollbarClass = 'w-full'
  if (!isFilter) {
    scrollbarClass += ' border p-3 h-screen-3/4  overflow-y-scroll'
  }
  return (
    <div className={scrollbarClass}>
      {recipes.map((recipe, i) =>
        <Recipe
          key={i}
          idx={i}
          id={recipe.id}
          carbonSource={recipe.carbon_source.value}
          basePressure={recipe.base_pressure.value}
          preparationSteps={recipe.preparation_steps}
          isAddedToFilter={recipe.isAddedToFilter}
          isFilter={isFilter}
        />
      )}
    </div>
  )
}

export default Recipes
