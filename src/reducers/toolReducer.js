export const toolDefaultState = {
  environmentalConditions: [],
  environmentalConditionFilters: [],
  furnaces: [],
  furnaceFilters: [],
  preparationStep: [],
  preparationStepFilters: [],
  properties: [],
  propertyFilters: [],
  recipes: [],
  recipeFilters: [],
  substrates: [],
  substrateFilters: [],
  authors: [],
  authorFilters: [],
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
    case 'ADD_ENVIRONMENTAL_CONDITION_FILTER': {
      const idx = action.payload.idx
      const newFilter = state.environmentalConditions[idx]
      newFilter.isAddedToFilter = true
      return {
        ...state,
        environmentalConditionFilters: [...state.environmentalConditionFilters, newFilter]
      }
    }
    case 'DEL_ENVIRONMENTAL_CONDITION_FILTER': {
      const newFilters = [...state.environmentalConditionFilters]
      const idx = action.payload.idx
      state.environmentalConditionFilters[idx].isAddedToFilter = false
      newFilters.splice(idx, 1)
      return {
        ...state,
        environmentalConditionFilters: newFilters
      }
    }
    case 'ADD_FURNACE_FILTER': {
      const idx = action.payload.idx
      const newFilter = state.furnaces[idx]
      newFilter.isAddedToFilter = true
      return {
        ...state,
        furnaceFilters: [...state.furnaceFilters, newFilter]
      }
    }
    case 'DEL_FURNACE_FILTER': {
      const newFilters = [...state.furnaceFilters]
      const idx = action.payload.idx
      state.furnaceFilters[idx].isAddedToFilter = false
      newFilters.splice(idx, 1)
      return {
        ...state,
        furnaceFilters: newFilters
      }
    }
    case 'ADD_SUBSTRATE_FILTER': {
      const idx = action.payload.idx
      const newFilter = state.substrates[idx]
      newFilter.isAddedToFilter = true
      return {
        ...state,
        substrateFilters: [...state.substrateFilters, newFilter]
      }
    }
    case 'DEL_SUBSTRATE_FILTER': {
      const newFilters = [...state.substrateFilters]
      const idx = action.payload.idx
      state.substrateFilters[idx].isAddedToFilter = false
      newFilters.splice(idx, 1)
      return {
        ...state,
        substrateFilters: newFilters
      }
    }
    case 'ADD_RECIPE_FILTER': {
      const idx = action.payload.idx
      const newFilter = state.recipes[idx]
      newFilter.isAddedToFilter = true
      return {
        ...state,
        recipeFilters: [...state.recipeFilters, newFilter]
      }
    }
    case 'DEL_RECIPE_FILTER': {
      const newFilters = [...state.recipeFilters]
      const idx = action.payload.idx
      state.recipeFilters[idx].isAddedToFilter = false
      newFilters.splice(idx, 1)
      return {
        ...state,
        recipeFilters: newFilters
      }
    }
    case 'ADD_PROPERTY_FILTER': {
      const idx = action.payload.idx
      const newFilter = state.properties[idx]
      newFilter.isAddedToFilter = true
      return {
        ...state,
        propertyFilters: [...state.propertyFilters, newFilter]
      }
    }
    case 'DEL_PROPERTY_FILTER': {
      const newFilters = [...state.propertyFilters]
      const idx = action.payload.idx
      state.propertyFilters[idx].isAddedToFilter = false
      newFilters.splice(idx, 1)
      return {
        ...state,
        propertyFilters: newFilters
      }
    }
    case 'ADD_AUTHOR_FILTER': {
      const idx = action.payload.idx
      const newFilter = state.authors[idx]
      newFilter.isAddedToFilter = true
      return {
        ...state,
        authorFilters: [...state.authorFilters, newFilter]
      }
    }
    case 'DEL_AUTHOR_FILTER': {
      const newFilters = [...state.authorFilters]
      const idx = action.payload.idx
      state.authorFilters[idx].isAddedToFilter = false
      newFilters.splice(idx, 1)
      return {
        ...state,
        authorFilters: newFilters
      }
    }
    default: {
      throw new Error('No matching action type.')
    }
  }
}

export default toolReducer
