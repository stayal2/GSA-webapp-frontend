export const toolDefaultState = {
  environmentalConditions: [],
  furnaces: [],
  preparationStep: [],
  properties: [],
  recipes: [],
  recipeFilters: [],
  substrates: [],
  authors: [],
  authorFilters: [],
  filters: [],
}

const toolReducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      const data = action.payload
      return {
        ...state,
        environmentalConditions: data.environmental_conditions,
        furnaces: data.furnaces,
        preparationSteps: data.preparations_steps,
        properties: data.properties,
        recipes: data.recipes,
        substrates: data.substrates,
        authors: data.authors,
      }
    }
    case 'ADD_FILTER' : {
      const newFilter = {...action.payload}

      return {
        ...state,
        filters: [...state.filters, newFilter]
      }
    }
    case 'REMOVE_FILTER' : {
      const delIdx = action.payload
      const newFilters = [...state.filters]
      newFilters.splice(delIdx, 1)

      return {
        ...state,
        filters: newFilters
      }
    }
    case 'ADD_RECIPE_FILTER': {
      const id = action.payload.id
      const newFilter =
        state.recipes
          .find((recipe) => recipe.id === id)
      newFilter.isAddedToFilter = true
      return {
        ...state,
        recipeFilters: [...state.recipeFilters, newFilter]
      }
    }
    case 'DEL_RECIPE_FILTER': {
      const newFilters = [...state.recipeFilters]
      const id = action.payload.id
      const idxToPop =
        state.recipeFilters
          .findIndex((recipe) => recipe.id === id)
      state.recipeFilters[idxToPop].isAddedToFilter = false
      newFilters.splice(idxToPop, 1)
      return {
        ...state,
        recipeFilters: newFilters
      }
    }
    default: {
      throw new Error('No matching action type.')
    }
  }
}

export default toolReducer
