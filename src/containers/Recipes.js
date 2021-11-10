import React from 'react'

import Recipe from '../components/Recipe'

const Recipes = ({ recipes, isFilter }) => {
  if (!recipes) {
    return null
  }
  return (
    recipes.map((recipe, i) =>
      <Recipe
        key={i}
        idx={i}
        id={recipe.id}
        carbonSource={recipe.carbon_source.value}
        basePressure={recipe.base_pressure.value}
        preparationSteps={recipe.preparation_steps}
        isFilter={isFilter}
      />
    )
  )
}

export default Recipes
