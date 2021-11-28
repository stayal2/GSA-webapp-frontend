import {carbonSourceOptions, catalystOptions} from "../settings";

export const submissionDefaultState = {
  useCustomEnvironmentalConditions: false,
  useCustomFurnace: false,
  useCustomSubstrate: false,
  useCustomRecipe: false,
  useCustomProperties: false,
  environmentalConditionsNumber: 1,
  ambientTemperature: 0,
  dewPoint: 0,
  furnaceNumber: 1,
  tubeDiameter: 0,
  crossSectionalArea: 0,
  tubeLength: 0,
  lengthOfHeatedRegion: 0,
  substrateNumber: 1,
  catalyst: catalystOptions[0],
  thickness: 0,
  diameter: 0,
  length: 0,
  surfaceArea: 0,
  recipeNumber: 1,
  carbonSource: carbonSourceOptions[0],
  basePressure: 0,
  propertiesNumber: 1,
  avgThicknessOfGrowth: 0,
  stdDevOfGrowth: 0,
  numberOfLayers: 0,
  growthCoverage: 0,
  domainSize: 0,
  authors: [],
}

const submissionReducer = (state, action) => {
  switch (action.type) {
    case 'INIT_SUBMISSION': {
      for (const author of state.authors) {
        if (author.id === action.payload.author.id) {
          return state
        }
      }
      return {
        ...state,
        authors: [...state.authors, action.payload.author]
      }
    }
    case 'SET_CUSTOM_ENVIRONMENTAL_CONDITIONS': {
      return {
        ...state,
        useCustomEnvironmentalConditions: action.payload
      }
    }
    case 'ENVIRONMENTAL_CONDITIONS_NUMBER_CHANGE': {
      return {
        ...state,
        environmentalConditionsNumber: action.payload
      }
    }
    case 'AMBIENT_TEMPERATURE_CHANGE': {
      return {
        ...state,
        ambientTemperature: action.payload
      }
    }
    case 'DEW_POINT_CHANGE': {
      return {
        ...state,
        dewPoint: action.payload
      }
    }
    case 'SET_CUSTOM_FURNACE': {
      return {
        ...state,
        useCustomFurnace: action.payload
      }
    }
    case 'FURNACE_NUMBER_CHANGE': {
      return {
        ...state,
        furnaceNumber: action.payload
      }
    }
    case 'TUBE_DIAMETER_CHANGE': {
      return {
        ...state,
        tubeDiameter: action.payload
      }
    }
    case 'CROSS_SECTIONAL_AREA_CHANGE': {
      return {
        ...state,
        crossSectionalArea: action.payload
      }
    }
    case 'TUBE_LENGTH_CHANGE': {
      return {
        ...state,
        tubeLength: action.payload
      }
    }
    case 'LENGTH_OF_HEATED_REGION_CHANGE': {
      return {
        ...state,
        lengthOfHeatedRegion: action.payload
      }
    }
    case 'SET_CUSTOM_SUBSTRATE': {
      return {
        ...state,
        useCustomSubstrate: action.payload
      }
    }
    case 'SUBSTRATE_NUMBER_CHANGE': {
      return {
        ...state,
        substrateNumber: action.payload
      }
    }
    case 'CATALYST_CHANGE': {
      return {
        ...state,
        catalyst: action.payload
      }
    }
    case 'THICKNESS_CHANGE': {
      return {
        ...state,
        thickness: action.payload
      }
    }
    case 'DIAMETER_CHANGE': {
      return {
        ...state,
        diameter: action.payload
      }
    }
    case 'LENGTH_CHANGE': {
      return {
        ...state,
        length: action.payload
      }
    }
    case 'SURFACE_AREA_CHANGE': {
      return {
        ...state,
        surfaceArea: action.payload
      }
    }
    case 'SET_CUSTOM_RECIPE': {
      return {
        ...state,
        useCustomRecipe: action.payload
      }
    }
    case 'RECIPE_NUMBER_CHANGE': {
      return {
        ...state,
        recipeNumber: action.payload
      }
    }
    case 'BASE_PRESSURE_CHANGE': {
      return {
        ...state,
        basePressure: action.payload
      }
    }
    case 'SET_CUSTOM_PROPERTIES': {
      return {
        ...state,
        useCustomProperties: action.payload
      }
    }
    case 'PROPERTIES_NUMBER_CHANGE': {
      return {
        ...state,
        propertiesNumber: action.payload
      }
    }
    case 'AVG_THICKNESS_OF_GROWTH_CHANGE': {
      return {
        ...state,
        avgThicknessOfGrowth: action.payload
      }
    }
    case 'STD_DEV_OF_GROWTH_CHANGE': {
      return {
        ...state,
        stdDevOfGrowth: action.payload
      }
    }
    case 'NUMBER_OF_LAYERS_CHANGE': {
      return {
        ...state,
        numberOfLayers: action.payload
      }
    }
    case 'GROWTH_COVERAGE_CHANGE': {
      return {
        ...state,
        growthCoverage: action.payload
      }
    }
    case 'DOMAIN_SIZE_CHANGE': {
      return {
        ...state,
        domainSize: action.payload
      }
    }
    case 'ADD_AUTHOR' : {
      return {
        ...state,
        authors: [...state.authors, action.payload]
      }
    }
    case 'DEL_AUTHOR' : {
      const filteredAuthors = state.authors.filter((author, i) => {
        return i !== action.payload
      })
      return {
        ...state,
        authors: filteredAuthors
      }
    }
    default: {
      throw new Error('No matching action type.')
    }
  }
}

export default submissionReducer