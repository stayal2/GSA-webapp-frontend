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
    case 'ADD_ENVIRONMENTAL_CONDITION_FILTER': {
      const id = action.payload.id
      const newFilter =
        state.environmentalConditions
          .find((environmentalCondition) => environmentalCondition.id === id)
      newFilter.isAddedToFilter = true
      return {
        ...state,
        environmentalConditionFilters: [...state.environmentalConditionFilters, newFilter]
      }
    }
    case 'DEL_ENVIRONMENTAL_CONDITION_FILTER': {
      const newFilters = [...state.environmentalConditionFilters]
      const id = action.payload.id
      const idxToPop =
        state.environmentalConditionFilters
          .findIndex((environmentalCondition) => environmentalCondition.id === id)
      state.environmentalConditionFilters[idxToPop].isAddedToFilter = false
      newFilters.splice(idxToPop, 1)
      return {
        ...state,
        environmentalConditionFilters: newFilters
      }
    }
    case 'ADD_FURNACE_FILTER': {
      const id = action.payload.id
      const newFilter =
        state.furnaces
          .find((furnace) => furnace.id === id)
      newFilter.isAddedToFilter = true
      return {
        ...state,
        furnaceFilters: [...state.furnaceFilters, newFilter]
      }
    }
    case 'DEL_FURNACE_FILTER': {
      const newFilters = [...state.furnaceFilters]
      const id = action.payload.id
      const idxToPop =
        state.furnaceFilters
          .findIndex((furnace) => furnace.id === id)
      state.furnaceFilters[idxToPop].isAddedToFilter = false
      newFilters.splice(idxToPop, 1)
      return {
        ...state,
        furnaceFilters: newFilters
      }
    }
    case 'ADD_SUBSTRATE_FILTER': {
      const id = action.payload.id
      const newFilter =
        state.substrates
          .find((substrate) => substrate.id === id)
      newFilter.isAddedToFilter = true
      return {
        ...state,
        substrateFilters: [...state.substrateFilters, newFilter]
      }
    }
    case 'DEL_SUBSTRATE_FILTER': {
      const newFilters = [...state.substrateFilters]
      const id = action.payload.id
      const idxToPop =
        state.substrateFilters
          .findIndex((substrate) => substrate.id === id)
      state.substrateFilters[idxToPop].isAddedToFilter = false
      newFilters.splice(idxToPop, 1)
      return {
        ...state,
        substrateFilters: newFilters
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
    case 'ADD_PROPERTY_FILTER': {
      const id = action.payload.id
      const newFilter =
        state.properties
          .find((property) => property.id === id)
      newFilter.isAddedToFilter = true
      return {
        ...state,
        propertyFilters: [...state.propertyFilters, newFilter]
      }
    }
    case 'DEL_PROPERTY_FILTER': {
      const newFilters = [...state.propertyFilters]
      const id = action.payload.id
      const idxToPop =
        state.propertyFilters
          .findIndex((recipe) => recipe.id === id)
      state.propertyFilters[idxToPop].isAddedToFilter = false
      newFilters.splice(idxToPop, 1)
      return {
        ...state,
        propertyFilters: newFilters
      }
    }
    case 'ADD_AUTHOR_FILTER': {
      const id = action.payload.id
      const newFilter =
        state.authors
          .find((author) => author.id === id)
      newFilter.isAddedToFilter = true
      return {
        ...state,
        authorFilters: [...state.authorFilters, newFilter]
      }
    }
    case 'DEL_AUTHOR_FILTER': {
      const newFilters = [...state.authorFilters]
      const id = action.payload.id
      const idxToPop =
        state.authorFilters
          .findIndex((recipe) => recipe.id === id)
      state.authorFilters[idxToPop].isAddedToFilter = false
      newFilters.splice(idxToPop, 1)
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
